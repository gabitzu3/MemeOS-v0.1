function createTaskManagerWindow() {
  const win = makeWindow('AmongUs Task Manager', 'w-[700px] h-[500px]');
  win.dataset.app = 'taskManager';

  const allProcesses = [
    { name: 'memeos-kernel.exe', user: 'SYSTEM', cpu: '45%', mem: '128.5 MB' },
    { name: 'impostor.exe', user: 'SYSTEM', cpu: '99%', mem: '666.0 MB', isThreat: true },
    { name: 'explorer.exe', user: 'Gabitzu', cpu: '5%', mem: '85.2 MB' },
    { name: 'svchost.exe', user: 'SYSTEM', cpu: '2%', mem: '25.1 MB' },
    { name: 'sussy-background-service.dll', user: 'Gabitzu', cpu: '10%', mem: '42.0 MB', isThreat: true },
    { name: 'winlogon.exe', user: 'SYSTEM', cpu: '0%', mem: '5.8 MB' },
    { name: 'csrss.exe', user: 'SYSTEM', cpu: '1%', mem: '6.2 MB' },
    { name: 'chrome.exe', user: 'Gabitzu', cpu: '8%', mem: '256.7 MB' },
    { name: 'chrome.exe', user: 'Gabitzu', cpu: '3%', mem: '150.1 MB' },
    { name: 'code.exe', user: 'Gabitzu', cpu: '12%', mem: '312.9 MB' },
    { name: 'vent.exe', user: 'SYSTEM', cpu: '0%', mem: '5.0 KB', isThreat: true },
    { name: 'skibidi-antivirus.exe', user: 'Gabitzu', cpu: '1%', mem: '30.3 MB' },
  ];

  const processes = allProcesses.filter(p => !p.isThreat || !window.memeOS.state.quarantinedThreats.has(p.name));

  let selectedProcess = null;

  const content = document.createElement('div');
  content.className = 'flex flex-col h-full text-sm';
  content.innerHTML = `
    <div class="flex-1 p-1 overflow-y-auto bg-gray-800">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-gray-700">
            <th class="p-1">Process Name</th>
            <th class="p-1">User</th>
            <th class="p-1">CPU</th>
            <th class="p-1">Memory</th>
          </tr>
        </thead>
        <tbody id="process-list">
          ${processes.map(p => `<tr class="hover:bg-blue-600" data-process="${p.name}">
            <td class="p-1">${p.name}</td>
            <td class="p-1">${p.user}</td>
            <td class="p-1">${p.cpu}</td>
            <td class="p-1">${p.mem}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="p-2 flex justify-end">
      <button id="end-task-btn" class="px-4 py-1 bg-gray-600 hover:bg-red-700 disabled:opacity-50" disabled>End Task</button>
    </div>
  `;

  win.appendChild(content);

  const endTaskBtn = content.querySelector('#end-task-btn');
  const processList = content.querySelector('#process-list');

  processList.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (!row) return;

    if (selectedProcess) {
      selectedProcess.classList.remove('bg-blue-800');
    }
    selectedProcess = row;
    selectedProcess.classList.add('bg-blue-800');
    endTaskBtn.disabled = false;
  });

  function createSusPopup(title, message) {
    const alert = makeWindow(title, 'w-[350px] h-auto');
    const msg = document.createElement('div');
    msg.className = 'p-4 text-center text-lg flex flex-col items-center justify-center text-white';
    msg.innerHTML = `
        <img src="js/apps/Amongussus.png" class="w-24 h-24 mb-4"/>
        <p>${message}</p>
    `;
    alert.appendChild(msg);
    document.getElementById('desktop').appendChild(alert);
    focusWindow(alert);
  }

  endTaskBtn.addEventListener('click', () => {
    if (!selectedProcess) return;

    const processName = selectedProcess.dataset.process;
    const criticalProcesses = ['memeos-kernel.exe', 'explorer.exe', 'svchost.exe', 'csrss.exe', 'winlogon.exe'];

    if (criticalProcesses.includes(processName)) {
      triggerBSOD();
      return;
    }

    const susProcesses = {
        'impostor.exe': 'An Impostor is among us. You cannot end this task.',
        'vent.exe': 'You saw nothing. This process is just venting.',
        'sussy-background-service.dll': 'This service is essential for... reasons. Don\'t be sus.'
    };

    if (susProcesses[processName]) {
        createSusPopup('SUSPICIOUS ACTIVITY', susProcesses[processName]);
    } else {
        selectedProcess.remove();
        selectedProcess = null;
        endTaskBtn.disabled = true;
    }
  });

  return win;
}

window.apps = window.apps || {};
window.apps.taskManager = { createWindow: createTaskManagerWindow };

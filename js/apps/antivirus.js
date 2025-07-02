function createAntivirusWindow() {
    const win = makeWindow('Skibidi Toilet Antivirus', 'w-[600px] h-[500px]');
    win.dataset.app = 'antivirus';

    const threats = ['impostor.exe', 'vent.exe', 'sussy-background-service.dll'];
    let detectedThreats = [];

    const content = document.createElement('div');
    content.className = 'flex flex-col h-full bg-gray-800';

    const scanView = document.createElement('div');
    scanView.id = 'scan-view';
    scanView.className = 'flex flex-col h-full w-full items-center justify-center p-4';
    scanView.innerHTML = `
        <div class="w-32 h-32 mb-4 rounded-full border-4 border-green-400 bg-black flex items-center justify-center">
            <img src="js/apps/Skibidi_Toilet.svg.png" class="w-28 h-28"/>
        </div>
        <h2 class="text-xl font-bold text-white">Skibidi Toilet Antivirus</h2>
        <p class="text-gray-400 mb-4">Protecting your system from cringe.</p>
        <button id="scan-btn" class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg">Scan Now</button>
    `;

    const scanningView = document.createElement('div');
    scanningView.id = 'scanning-view';
    scanningView.className = 'hidden flex-col h-full w-full items-center justify-center p-4';
    scanningView.innerHTML = `
        <p class="text-lg text-white mb-4">Scanning for sussy files...</p>
        <div class="w-full bg-gray-700 rounded-full h-4">
            <div id="progress-bar" class="bg-blue-600 h-4 rounded-full text-center text-white text-xs leading-4" style="width: 0%">0%</div>
        </div>
    `;

    const resultsView = document.createElement('div');
    resultsView.id = 'results-view';
    resultsView.className = 'hidden flex flex-col h-full w-full';
    resultsView.innerHTML = `
        <div class="flex items-center p-2 bg-gray-900 border-b border-gray-700">
            <div class="flex-grow"></div>
            <div class="flex items-center">
                <img src="js/apps/Skibidi_Toilet.svg.png" class="w-10 h-10"/>
                <h3 class="text-md font-bold text-white ml-2">Skibidi Toilet Antivirus</h3>
            </div>
        </div>
        <div class="p-4 flex-grow overflow-y-auto">
            <p class="text-red-400 font-bold text-lg">Threats Detected!</p>
            <ul id="threat-list" class="mt-2 space-y-1 text-yellow-300 font-mono text-sm">
            </ul>
        </div>
        <div class="p-2 flex justify-end space-x-2 bg-gray-900 border-t border-gray-700">
            <button id="quarantine-btn" class="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded">Quarantine Detections</button>
            <button id="rescan-btn" class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">Scan Again</button>
        </div>
    `;

    const noThreatsView = document.createElement('div');
    noThreatsView.id = 'no-threats-view';
    noThreatsView.className = 'hidden flex-col h-full w-full items-center justify-center p-4';
    noThreatsView.innerHTML = `
        <div class="w-32 h-32 mb-4 rounded-full border-4 border-green-400 bg-green-900 flex items-center justify-center">
             <img src="js/apps/Skibidi_Toilet.svg.png" class="w-28 h-28"/>
        </div>
        <h2 class="text-xl font-bold text-green-400">System is Gyatt-Level Clean!</h2>
        <p class="text-gray-300 mb-4">No sussy impostors found. You're so Fanum Tax.</p>
        <button id="rescan-btn-2" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">Scan Again</button>
    `;

    content.appendChild(scanView);
    content.appendChild(scanningView);
    content.appendChild(resultsView);
    content.appendChild(noThreatsView);
    win.appendChild(content);

    const scanBtn = content.querySelector('#scan-btn');
    const progressBar = content.querySelector('#progress-bar');
    const threatList = content.querySelector('#threat-list');
    const quarantineBtn = content.querySelector('#quarantine-btn');
    const rescanBtn = content.querySelector('#rescan-btn');
    const rescanBtn2 = content.querySelector('#rescan-btn-2');

    const resetToScanView = () => {
        resultsView.classList.add('hidden');
        noThreatsView.classList.add('hidden');
        scanView.classList.remove('hidden');
    };

    scanBtn.addEventListener('click', () => {
        scanView.classList.add('hidden');
        scanningView.classList.remove('hidden');
        resultsView.classList.add('hidden');
        noThreatsView.classList.add('hidden');

        let progress = 0;
        const scanDuration = Math.random() * 5000 + 2000; // Faster scan
        const interval = setInterval(() => {
            progress += 50;
            const percent = Math.min(Math.floor((progress / scanDuration) * 100), 100);
            progressBar.style.width = `${percent}%`;
            progressBar.textContent = `${percent}%`;

            if (percent >= 100) {
                clearInterval(interval);
                scanningView.classList.add('hidden');

                detectedThreats = threats.filter(t => !window.memeOS.state.quarantinedThreats.has(t));

                if (detectedThreats.length === 0) {
                    noThreatsView.classList.remove('hidden');
                } else {
                    resultsView.classList.remove('hidden');
                    threatList.innerHTML = detectedThreats.map(t => `<li>C:\\Windows\\System32\\${t}</li>`).join('');
                    quarantineBtn.disabled = false;
                    quarantineBtn.textContent = 'Quarantine Detections';
                    quarantineBtn.classList.add('bg-red-600', 'hover:bg-red-700');
                    quarantineBtn.classList.remove('bg-gray-500');
                }
            }
        }, 50);
    });

    rescanBtn.addEventListener('click', resetToScanView);
    rescanBtn2.addEventListener('click', resetToScanView);

    quarantineBtn.addEventListener('click', () => {
        detectedThreats.forEach(t => window.memeOS.state.quarantinedThreats.add(t));
        quarantineBtn.disabled = true;
        quarantineBtn.textContent = 'Threats Quarantined';
        quarantineBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
        quarantineBtn.classList.add('bg-gray-500');

        // After quarantining, show the success screen
        setTimeout(() => {
            resultsView.classList.add('hidden');
            noThreatsView.classList.remove('hidden');
        }, 500);
    });

    return win;
}

window.apps = window.apps || {};
window.apps.antivirus = { createWindow: createAntivirusWindow };

//* MemeOS Desktop & Window Manager */

window.memeOS = {
    state: {
        quarantinedThreats: new Set(),
        lastWindowPosition: { top: 5, left: 20 },
        windowOffset: 30
    }
};

const desktop = document.getElementById('desktop');
const taskbar = document.getElementById('taskbar');
let zIndexCounter = 10;

function openApp(app, params = {}) {
  console.log(`[Desktop] Attempting to open app: "${app}"`);
  const existing = document.querySelector(`.window[data-app="${app}"]:not(.incognito)`);
  if (existing && !params.incognito) {
    console.log(`[Desktop] App "${app}" is already open. Focusing window.`);
    focusWindow(existing);
    return;
  }

  if (window.apps && window.apps[app]) {
    console.log(`[Desktop] App "${app}" found in registry. Creating window...`);
    try {
        const win = window.apps[app].createWindow(params);
        console.log(`[Desktop] Window for "${app}" created successfully.`);

        win.style.visibility = 'hidden';
        desktop.appendChild(win);
        const winWidth = win.offsetWidth;
        const winHeight = win.offsetHeight;

        const { top, left } = window.memeOS.state.lastWindowPosition;
        const offset = window.memeOS.state.windowOffset;
        const desktopHeight = desktop.clientHeight;
        const desktopWidth = desktop.clientWidth;

        let newTop = top + offset;
        let newLeft = left + offset;

        if (newLeft + winWidth > desktopWidth || newTop + winHeight > desktopHeight) {
            newTop = 5;
            newLeft = 20;
        }

        win.style.top = `${newTop}px`;
        win.style.left = `${newLeft}px`;
        win.style.visibility = 'visible'; 

        window.memeOS.state.lastWindowPosition = { top: newTop, left: newLeft };

        taskbarAdd(app, win);
        focusWindow(win);
        console.log(`[Desktop] App "${app}" window added to desktop and focused.`);
    } catch (e) {
        console.error(`[Desktop] Error creating window for app "${app}":`, e);
        alert(`Could not open ${app}. Check the console for errors.`);
    }
  } else {
    console.error(`[Desktop] App "${app}" not found in registry.`);
    console.log('[Desktop] Available apps:', window.apps);
    alert(`App "${app}" is not registered correctly.`);
  }
}

function taskbarAdd(app, win) {
  const btn = document.createElement('button');
  btn.textContent = app;
  btn.className = 'px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded';
  btn.onclick = () => focusWindow(win);
  win.addEventListener('close', () => btn.remove());
  taskbar.appendChild(btn);
}

function focusWindow(win) {
  zIndexCounter++;
  win.style.zIndex = zIndexCounter;
  win.classList.remove('opacity-70');
  document.querySelectorAll('.window').forEach(w => {
    if (w !== win) w.classList.add('opacity-70');
  });
}

let dragData = null;

desktop.addEventListener('mousedown', e => {
  const win = e.target.closest('.window');
  if (!win) return; 

  focusWindow(win);

  if (e.target.classList.contains('titlebar')) {
    dragData = {
      win,
      offsetX: e.clientX - win.offsetLeft,
      offsetY: e.clientY - win.offsetTop
    };
  }
});

desktop.addEventListener('mousemove', e => {
  if (!dragData) return;
  dragData.win.style.left = `${e.clientX - dragData.offsetX}px`;
  dragData.win.style.top  = `${e.clientY - dragData.offsetY}px`;
});

desktop.addEventListener('mouseup', () => dragData = null);

window.openApp = openApp;
window.focusWindow = focusWindow;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.desktop-icon[data-app]').forEach(icon => {
        icon.onclick = () => openApp(icon.dataset.app);
    });
});

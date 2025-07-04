// --- App State & Constants ---
const MAX_WINDOWS = 15;
const SPAWN_INTERVAL_MS = 5000; 

let susSession = {
    active: false,
    intervalId: null,
    windowCount: 0,
    openWindows: [],
    cheatCodeBuffer: '',
    animationFrameId: null
};

window.stopSusApp = function() {
    if (!susSession.active) return;
    console.log("[Sus] Emergency stop triggered!");

    susSession.active = false;
    clearInterval(susSession.intervalId);
    cancelAnimationFrame(susSession.animationFrameId);
    susSession.intervalId = null;
    susSession.animationFrameId = null;

    [...susSession.openWindows].forEach(win => {
        if (document.body.contains(win)) {
            win.dispatchEvent(new Event('close')); 
            win.remove(); 
        }
    });

    susSession.openWindows = [];
    susSession.windowCount = 0;
    document.removeEventListener('keydown', handleCheatCode);
};

function handleCheatCode(e) {
    if (!susSession.active) return;
    susSession.cheatCodeBuffer += e.key.toLowerCase();
    if (susSession.cheatCodeBuffer.endsWith('sus') || susSession.cheatCodeBuffer.endsWith('amogus')) {
        window.stopSusApp();
    }
    if (susSession.cheatCodeBuffer.length > 10) {
        susSession.cheatCodeBuffer = susSession.cheatCodeBuffer.slice(-10);
    }
}

function animateSusWindows() {
    const desktop = document.getElementById('desktop');
    const desktopRect = desktop.getBoundingClientRect();

    susSession.openWindows.forEach(win => {
        win.moveTime = (win.moveTime || 0) + 1;
        let newLeft = win.offsetLeft;
        let newTop = win.offsetTop;
        let dx = win.dx, dy = win.dy;
        const w = win.offsetWidth;
        const h = win.offsetHeight;
        const D = desktopRect;

        switch (win.movementType) {
            case 'straight':
                newLeft += dx;
                newTop += dy;
                if (newLeft <= 0 || newLeft + w >= D.width) win.dx *= -1;
                if (newTop <= 0 || newTop + h >= D.height) win.dy *= -1;
                break;
            case 'circle':
                const r = 80 + Math.random() * 100;
                const centerX = win.centerX ?? (win.centerX = newLeft);
                const centerY = win.centerY ?? (win.centerY = newTop);
                const theta = win.moveTime / (20 + Math.random() * 20) * win.zigzagDir;
                newLeft = centerX + Math.cos(theta) * r;
                newTop = centerY + Math.sin(theta) * r;
                break;
            case 'zigzag':
                newLeft += dx;
                newTop += Math.sin(win.moveTime / 8) * 18 * win.zigzagDir;
                if (newLeft <= 0 || newLeft + w >= D.width) win.dx *= -1;
                break;
            case 'jitter':
                newLeft += dx + (Math.random() - 0.5) * 6;
                newTop += dy + (Math.random() - 0.5) * 6;
                if (newLeft <= 0 || newLeft + w >= D.width) win.dx *= -1;
                if (newTop <= 0 || newTop + h >= D.height) win.dy *= -1;
                break;
        }
        newLeft = Math.max(0, Math.min(newLeft, D.width - w));
        newTop = Math.max(0, Math.min(newTop, D.height - h));
        win.style.left = `${newLeft}px`;
        win.style.top = `${newTop}px`;
    });

    susSession.animationFrameId = requestAnimationFrame(animateSusWindows);
}

function launchSusAttack() {
    if (!susSession.active || susSession.windowCount >= MAX_WINDOWS) {
        clearInterval(susSession.intervalId);
        susSession.intervalId = null;
        return;
    }
    for (let i = 0; i < 2; i++) {
        if (susSession.windowCount < MAX_WINDOWS) {
            window.openApp('among-us-sus', { isSpawned: true });
        }
    }
}

/**
 * This is the dedicated factory for creating a single 'Sus' window.
 * It's called for the very first window and all subsequent spawned windows.
 */
function _createSingleSusWindow() {
    susSession.windowCount++;

    const win = makeWindow('You Are Sus');
    const titleBar = win.querySelector('.titlebar'); 

    const speed = 6 + Math.random() * 6; 
    const angle = Math.random() * 2 * Math.PI;
    const movementTypes = ['straight', 'zigzag', 'jitter'];
    win.movementType = movementTypes[Math.floor(Math.random() * movementTypes.length)];
    win.baseSpeed = speed;
    win.baseAngle = angle;
    win.dx = Math.cos(angle) * speed;
    win.dy = Math.sin(angle) * speed;
    win.moveTime = 0; 
    win.zigzagDir = Math.random() < 0.5 ? 1 : -1;
    win.classList.remove('w-96', 'h-64');
    win.style.width = '250px';
    win.style.height = '300px';

    const iframe = document.createElement('iframe');
    iframe.src = 'js/apps/amongUsSus_assets/sus.html';
    iframe.style.cssText = 'width: 100%; height: 100%; border: none;';
    win.appendChild(iframe);

    susSession.openWindows.push(win);

    iframe.addEventListener('load', () => {
        try {
            iframe.contentDocument.addEventListener('mousedown', () => {
                if (titleBar) {
                    titleBar.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                }
            });

            if (susSession.windowCount === MAX_WINDOWS) {
                const button = iframe.contentDocument.createElement('button');
                button.textContent = 'EMERGENCY STOP';
                Object.assign(button.style, {
                    position: 'absolute', bottom: '20px', left: '50%',
                    transform: 'translateX(-50%)', padding: '10px 20px',
                    backgroundColor: 'red', color: 'white', border: '2px solid white',
                    borderRadius: '5px', zIndex: '1000', cursor: 'pointer'
                });
                button.onclick = window.stopSusApp;
                iframe.contentDocument.body.appendChild(button);
            }
        } catch (e) {
            console.error('[Sus] Error accessing iframe content:', e);
        }
    });

    win.addEventListener('close', () => {
        const index = susSession.openWindows.indexOf(win);
        if (index > -1) susSession.openWindows.splice(index, 1);
        if (susSession.active && susSession.openWindows.length === 0) {
            window.stopSusApp();
        }
    });

    return win;
}


window.apps = window.apps || {};

window.apps['among-us-sus'] = {
    name: 'You Are Sus',
    icon: 'js/apps/amongUsSus_assets/media/icon.png',
    config: { incognito: true },

    createWindow: (params) => {
        if (params && params.isSpawned) {
            return _createSingleSusWindow();
        }

        if (susSession.active) {
            if (susSession.openWindows.length > 0) window.focusWindow(susSession.openWindows[0]);
            return; 
        }
        
        susSession.active = true;
        susSession.windowCount = 0;
        susSession.openWindows = [];
        susSession.cheatCodeBuffer = '';
        document.addEventListener('keydown', handleCheatCode);

        const firstWindow = _createSingleSusWindow();

        susSession.intervalId = setInterval(launchSusAttack, SPAWN_INTERVAL_MS);

        if (susSession.animationFrameId === null) {
            animateSusWindows();
        }

        return firstWindow;
    }
};
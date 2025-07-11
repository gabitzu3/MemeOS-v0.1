const GTA6_POPUPS = [
    {
        message: "We’re waiting on one last developer to finish their coffee.",
        button: "Tell them to hurry up",
        type: 'simple'
    },
    {
        message: "Loading… please wait. Still waiting. You should probably go touch grass.",
        button: "I prefer the great indoors",
        type: 'simple'
    },
    {
        message: "GTA VI has detected that your excitement is too high. Cooling down hype…",
        button: "It's not working!",
        type: 'simple'
    },
    {
        message: "You've been selected for the patience test DLC. Congrats!",
        button: "Where's my prize?",
        type: 'simple'
    },
    {
        message: "Estimated time remaining: Yes.",
        button: "Understandable.",
        type: 'simple'
    },
    {
        message: "GTA VI is not loading… it’s evolving.",
        button: "Into what?!",
        type: 'simple'
    },
    {
        message: "Plot twist: This was the game.",
        button: "I want a refund",
        type: 'simple'
    },
    {
        message: "Launching GTA VI… Just kidding. Go outside.",
        button: "You can't make me",
        type: 'simple'
    },
    {
        message: "You're the beta tester for the loading screen. Feedback?",
        button: "It's... an experience.",
        type: 'simple'
    },
    {
        message: "Your copy of GTA VI has been intercepted by aliens. Sorry.",
        button: "I knew it!",
        type: 'simple'
    },
    {
        message: "GTA VI will start once you admit Red Dead 2 had a better story.",
        button: "Never!",
        type: 'simple'
    },
    {
        message: "Please insert more RAM to continue. (Like… physically.)",
        type: 'question',
        buttonYes: "Okay, I'm on it!",
        buttonNo: "I give up"
    }
];

function createGTA6Window() {
    const win = makeWindow('GTA VI');
    win.classList.remove('w-96', 'h-64');
    win.classList.add('w-[1024px]', 'h-[576px]');
    win.dataset.app = 'gta6';

    const content = document.createElement('div');
    content.className = 'relative w-full h-full bg-black flex items-center justify-center';

    const video = document.createElement('video');
    video.src = 'js/apps/gtaviloading.mp4';
    video.className = 'w-full h-full';
    video.autoplay = true;
    video.volume = 0.5;

    let popupTimeout;
    let lastPopupTime = 0;

    let unseenPopups = [];
    let popupsInitialized = false;
    const ramPopupIndex = GTA6_POPUPS.findIndex(p => p.message.includes("RAM"));
    const ramPopup = GTA6_POPUPS[ramPopupIndex];

    function initializePopups() {
        unseenPopups = GTA6_POPUPS
            .filter((_, index) => index !== ramPopupIndex)
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        popupsInitialized = true;
    }

    function getNextPopup() {
        if (!popupsInitialized) {
            initializePopups();
            return ramPopup;
        }

        if (unseenPopups.length > 0) {
            return unseenPopups.shift(); 
        }

        const otherPopups = GTA6_POPUPS.filter((_, index) => index !== ramPopupIndex);
        return otherPopups[Math.floor(Math.random() * otherPopups.length)];
    }

    video.onended = () => {
        video.currentTime = 16;
        video.play();
    };

    function showPopup() {
        video.pause();

        const popupContainer = document.createElement('div');
        popupContainer.className = 'absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
        
        const popupData = getNextPopup();

        const popupContent = document.createElement('div');
        popupContent.className = 'bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center font-mono max-w-sm';

        const message = document.createElement('p');
        message.className = 'mb-4';
        message.textContent = popupData.message;
        popupContent.appendChild(message);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex justify-center gap-4';

        const closePopup = (andCloseWindow = false) => {
            popupContainer.remove();
            if (andCloseWindow) {
                win.dispatchEvent(new Event('close'));
                win.remove();
            } else {
                video.play();
                lastPopupTime = video.currentTime;
                scheduleNextPopup();
            }
        };

        if (popupData.type === 'question') {
            const yesBtn = document.createElement('button');
            yesBtn.className = 'px-4 py-2 bg-green-500 hover:bg-green-600 rounded';
            yesBtn.textContent = popupData.buttonYes;
            yesBtn.onclick = () => closePopup();
            buttonContainer.appendChild(yesBtn);

            const noBtn = document.createElement('button');
            noBtn.className = 'px-4 py-2 bg-red-500 hover:bg-red-600 rounded';
            noBtn.textContent = popupData.buttonNo;
            noBtn.onclick = () => closePopup(true);
            buttonContainer.appendChild(noBtn);
        } else {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded';
            closeBtn.textContent = popupData.button;
            closeBtn.onclick = () => closePopup();
            buttonContainer.appendChild(closeBtn);
        }

        popupContent.appendChild(buttonContainer);
        popupContainer.appendChild(popupContent);
        content.appendChild(popupContainer);
    }

    function scheduleNextPopup() {
        clearTimeout(popupTimeout);
        const delay = (lastPopupTime === 0) ? 20000 : (5000 + Math.random() * 1000);
        popupTimeout = setTimeout(showPopup, delay);
    }

    const muteBtn = document.createElement('button');
    muteBtn.className = 'absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded z-10';
    muteBtn.textContent = 'Mute';
    muteBtn.onclick = () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    };

    content.appendChild(video);
    content.appendChild(muteBtn);
    win.appendChild(content);

    win.addEventListener('close', () => clearTimeout(popupTimeout));

    scheduleNextPopup();

    return win;
}

window.apps = window.apps || {};
window.apps.gta6 = {
    createWindow: createGTA6Window,
    icon: 'js/apps/gta6_icon.png'
};

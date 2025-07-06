window.apps = window.apps || {};
const rickMortyDimensionApp = {
    name: 'Rick & Morty Dimension',
    icon: 'js/apps/rickMortyDimension_assets/portal.gif',
    config: {
        width: '95vw',
        height: '95vh',
    },
    state: {
    },
    createWindow: () => {
        const win = makeWindow(rickMortyDimensionApp.name);
        win.style.width = rickMortyDimensionApp.config.width;
        win.style.height = rickMortyDimensionApp.config.height;
        win.classList.add('rick-morty-dimension-app');
        const phase1Container = document.createElement('div');
        phase1Container.className = 'phase-1-container';
        phase1Container.innerHTML = `
            <div class="dont-press-me-content">
                <button id="dont-press-me-btn">DON'T PRESS ME!</button>
                <p class="rick-quote">"Don’t click it. Seriously, Morty."</p>
            </div>
            <img src="js/apps/rickMortyDimension_assets/Cronenberg_Morty.png" class="cronenberg-morty" alt="Cronenberg Morty">
            <div class="morty-quote">Rick, I think I broke it...</div>
            <img src="js/apps/rickMortyDimension_assets/Pickle_rick.png" class="pickle-rick-static" alt="Pickle Rick">
        `;
        win.appendChild(phase1Container);
        const dontPressBtn = win.querySelector('#dont-press-me-btn');
        const closeBtn = win.querySelector('.close-btn');
        const portal = document.createElement('img');
        portal.src = 'js/apps/rickMortyDimension_assets/portal.gif';
        portal.className = 'dimension-portal';
        win.appendChild(portal);
        setTimeout(() => {
            portal.style.opacity = '0';
            setTimeout(() => portal.remove(), 1000);
        }, 4000); 
        let glitchInterval = setInterval(() => {
            win.classList.toggle('glitch-active');
        }, 3000);
        let gameCleanup = () => {}; 
        dontPressBtn.addEventListener('click', () => {
            new Audio('sounds/pickle_rick.mp3').play();
            phase1Container.style.display = 'none';
            const pickleRick = document.createElement('img');
            pickleRick.src = 'js/apps/rickMortyDimension_assets/Pickle_rick.png';
            pickleRick.className = 'pickle-rick-animated';
            win.appendChild(pickleRick);
            if (closeBtn) closeBtn.style.display = 'none';
            clearInterval(glitchInterval);
            win.classList.remove('glitch-active');
            setTimeout(() => {
                const fadeOverlay = document.createElement('div');
                fadeOverlay.className = 'fade-to-black';
                document.body.appendChild(fadeOverlay); 
                setTimeout(() => {
                    pickleRick.remove(); 
                    gameCleanup = startPickleRickRain(win, fadeOverlay);
                }, 2000); 
            }, 5000); 
        });
        win.addEventListener('close', () => {
            clearInterval(glitchInterval);
            gameCleanup(); 
        });
        return win;
    }
};
function startPickleRickRain(win, fadeOverlay) {
    const state = {
        score: 0,
        firstClick: true,
        gameElements: [],
    };
    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.textContent = `Score: 0`;
    document.body.appendChild(scoreboard);
    state.gameElements.push(scoreboard);
    const gameCloseBtn = document.createElement('button');
    gameCloseBtn.className = 'game-close-btn';
    gameCloseBtn.textContent = 'X';
    gameCloseBtn.onclick = () => {
        win.dispatchEvent(new Event('close'));
        win.remove();
    };
    document.body.appendChild(gameCloseBtn);
    state.gameElements.push(gameCloseBtn);
    const rainInterval = setInterval(() => {
        const pickle = document.createElement('img');
        pickle.src = 'js/apps/rickMortyDimension_assets/Pickle_rick.png';
        pickle.className = 'falling-pickle';
        pickle.draggable = false; 
        pickle.style.left = `${Math.random() * 98}vw`;
        pickle.style.transform = `rotate(${Math.random() * 360}deg)`;
        pickle.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(pickle);
        pickle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            state.score++;
            scoreboard.textContent = `Score: ${state.score}`;
            pickle.remove();
            if (state.firstClick) {
                new Audio('sounds/Wubba_Lubba_Dub_Dub.mp3').play();
                state.firstClick = false;
            } else if (state.score % 15 === 0) {
                new Audio('sounds/Wubba_Lubba_Dub_Dub.mp3').play();
            }
        });
        setTimeout(() => pickle.remove(), 5000);
    }, 200);
    return () => {
        clearInterval(rainInterval);
        fadeOverlay.remove();
        state.gameElements.forEach(el => el.remove());
        document.querySelectorAll('.falling-pickle').forEach(p => p.remove());
    };
}
window.apps['rick-morty-dimension'] = rickMortyDimensionApp;
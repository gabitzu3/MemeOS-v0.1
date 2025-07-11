const nyanFlyerApp = {
    createWindow: function() {
        const existingWindow = document.querySelector('.window[data-app="nyan-flyer"]');
        if (existingWindow) {
            if (typeof focusWindow === 'function') {
                focusWindow(existingWindow);
            }
            return;
        }
        const win = makeWindow('Nyan Flyer');
        win.dataset.app = 'nyan-flyer';
        win.classList.add('nyan-flyer-window');
        win.classList.remove('w-96', 'h-64');
        win.classList.add('w-[80vw]', 'h-[80vh]');
        const gameContainer = document.createElement('div');
        gameContainer.id = 'nyan-flyer-container';
        win.appendChild(gameContainer);
        const music = new Audio('sounds/NyanCat.mp3');
        music.loop = true;
        const failSound = new Audio('sounds/nyan-fail.wav');
        let gameLoopId = null;
        let handleKeydown = null;
        function cleanupListeners() {
            if (gameLoopId) cancelAnimationFrame(gameLoopId);
            if (handleKeydown) document.removeEventListener('keydown', handleKeydown);
            gameLoopId = null;
            handleKeydown = null;
        }
        function showStartScreen() {
            cleanupListeners();
            gameContainer.innerHTML = `
                <div class="nyan-start-screen">
                    <h1 class="nyan-title">Nyan Flyer</h1>
                    <button class="nyan-btn" id="nyan-play-btn">Play</button>
                    <button class="nyan-btn" id="nyan-volume-btn">Volume: On</button>
                </div>
            `;
            gameContainer.querySelector('#nyan-play-btn').onclick = startGame;
            const volumeBtn = gameContainer.querySelector('#nyan-volume-btn');
            volumeBtn.onclick = () => {
                music.muted = !music.muted;
                failSound.muted = !failSound.muted;
                volumeBtn.textContent = music.muted ? 'Volume: Off' : 'Volume: On';
            };
        }
        function startGame() {
            gameContainer.classList.remove('rainbow-overdrive');
            gameContainer.innerHTML = '';
            music.playbackRate = 1.0;
            if (!music.muted) music.play();
            let score = 0;
            let isOverdrive = false;
            let gameSpeed = 3;
            let gravity = 0.3;
            let lift = -6;
            let velocity = 0;
            const nyanCat = document.createElement('img');
            nyanCat.src = 'js/apps/nyanFlyer_assets/nyan-cat.gif';
            nyanCat.className = 'nyan-cat';
            gameContainer.appendChild(nyanCat);
            let playerY = gameContainer.clientHeight / 2;
            const scoreDisplay = document.createElement('div');
            scoreDisplay.className = 'nyan-score';
            scoreDisplay.textContent = score;
            gameContainer.appendChild(scoreDisplay);
            let obstacles = [];
            let frameCount = 0;
            function flap() {
                velocity = lift;
            }
            function gameOver() {
                music.pause();
                if (!failSound.muted) failSound.play();
                cleanupListeners();
                gameContainer.innerHTML += `
                    <div class="nyan-game-over">
                        <h2>Game Over</h2>
                        <p>Score: ${score}</p>
                        <button class="nyan-btn" id="nyan-restart-btn">Restart</button>
                    </div>
                `;
                gameContainer.querySelector('#nyan-restart-btn').onclick = startGame;
            }
            function gameLoop() {
                velocity += gravity;
                playerY += velocity;
                nyanCat.style.top = playerY + 'px';
                if (playerY > gameContainer.clientHeight - nyanCat.height || playerY < 0) {
                    gameOver();
                    return;
                }
                if (frameCount % 100 === 0) {
                    let gapHeight = 220;
                    let gapStart = Math.random() * (gameContainer.clientHeight - gapHeight - 80) + 40;
                    const topObstacle = document.createElement('div');
                    topObstacle.className = 'nyan-obstacle top';
                    topObstacle.style.height = `${gapStart}px`;
                    gameContainer.appendChild(topObstacle);
                    const bottomObstacle = document.createElement('div');
                    bottomObstacle.classList.add('nyan-obstacle', 'bottom');
                    bottomObstacle.style.height = `${gameContainer.clientHeight - gapStart - gapHeight}px`;
                    gameContainer.appendChild(bottomObstacle);
                    obstacles.push({ top: topObstacle, bottom: bottomObstacle, passed: false });
                }
                let playerRect = nyanCat.getBoundingClientRect();
                for (let i = obstacles.length - 1; i >= 0; i--) {
                    let obs = obstacles[i];
                    let currentLeft = parseFloat(window.getComputedStyle(obs.top).left);
                    let newLeft = currentLeft - gameSpeed;
                    obs.top.style.left = newLeft + 'px';
                    obs.bottom.style.left = newLeft + 'px';
                    let topRect = obs.top.getBoundingClientRect();
                    let bottomRect = obs.bottom.getBoundingClientRect();
                    if ((playerRect.right > topRect.left && playerRect.left < topRect.right && playerRect.top < topRect.bottom) ||
                        (playerRect.right > bottomRect.left && playerRect.left < bottomRect.right && playerRect.bottom > bottomRect.top)) {
                        gameOver();
                        return;
                    }
                    if (!obs.passed && topRect.right < playerRect.left) {
                        obs.passed = true;
                        score++;
                        scoreDisplay.textContent = score;
                        if (score === 10 && !isOverdrive) {
                            isOverdrive = true;
                            gameSpeed *= 1.25; 
                            music.playbackRate = 1.25; 
                            gameContainer.classList.add('rainbow-overdrive');
                            const rainbowText = document.createElement('div');
                            rainbowText.className = 'rainbow-activated-text';
                            rainbowText.textContent = 'RAINBOW MODE ACTIVATED!';
                            gameContainer.appendChild(rainbowText);
                            setTimeout(() => {
                                rainbowText.remove();
                            }, 2000);
                        }
                    }
                    if (newLeft < -80) {
                        obs.top.remove();
                        obs.bottom.remove();
                        obstacles.splice(i, 1);
                    }
                }
                frameCount++;
                gameLoopId = requestAnimationFrame(gameLoop);
            }
            handleKeydown = e => { if (e.code === 'Space' || e.code === 'ArrowUp') flap(); };
            document.addEventListener('keydown', handleKeydown);
            gameContainer.addEventListener('mousedown', flap);
            
            setTimeout(gameLoop, 0);
        }
        win.addEventListener('close', () => {
            cleanupListeners();
            music.pause();
        });
        showStartScreen();
        return win;
    }
};
window.apps['nyan-flyer'] = nyanFlyerApp;
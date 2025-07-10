document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const playerContainer = document.createElement('div');
    playerContainer.id = 'shiba-player-container';
    const shibaPlayer = document.createElement('div');
    shibaPlayer.id = 'shiba-player';
    const shibaImg = document.createElement('img');
    shibaImg.id = 'shiba-inu-img';
    shibaImg.src = 'assets/images/shiba-inu-music.png';
    shibaImg.alt = 'Shiba Inu';
    const bubble = document.createElement('div');
    bubble.className = 'shiba-bubble initial-show';
    bubble.innerHTML = '<p>click me for chill beats <span class="shiba-emoji">☕</span></p>';
    shibaPlayer.appendChild(shibaImg);
    shibaPlayer.appendChild(bubble);
    playerContainer.appendChild(shibaPlayer);
    body.appendChild(playerContainer);
    const music = new Audio('assets/audio/lofi-3hours-memeos.mp3');
    music.loop = true;
    let hasBeenClicked = false;
    let lastVolume = 0.5;
    function createPlayerUI() {
        bubble.innerHTML = `
            <div class="shiba-player-controls">
                <button id="shiba-mute-btn">🔊</button>
                <input type="range" id="shiba-volume-slider" min="0" max="1" step="0.01" value="${music.volume}">
            </div>
        `;
        bubble.classList.add('player-active');
        const muteBtn = document.getElementById('shiba-mute-btn');
        const volumeSlider = document.getElementById('shiba-volume-slider');
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            music.muted = !music.muted;
            updateMuteButton();
            if (music.muted) {
                volumeSlider.value = 0;
            } else {
                volumeSlider.value = lastVolume;
            }
        });
        volumeSlider.addEventListener('input', () => {
            music.volume = volumeSlider.value;
            lastVolume = music.volume;
            if (music.volume > 0) {
                music.muted = false;
            }
            updateMuteButton();
        });
    }
    function updateMuteButton() {
        const muteBtn = document.getElementById('shiba-mute-btn');
        if (music.muted || music.volume === 0) {
            muteBtn.textContent = '🔇';
        } else {
            muteBtn.textContent = '🔊';
        }
    }
    shibaPlayer.addEventListener('click', () => {
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            bubble.classList.remove('initial-show');
            music.volume = lastVolume;
            music.play();
            createPlayerUI();
        }
    });
    playerContainer.addEventListener('mouseenter', () => {
        if (hasBeenClicked) {
            bubble.classList.remove('fade-out');
        }
    });
    playerContainer.addEventListener('mouseleave', () => {
        if (hasBeenClicked) {
            bubble.classList.add('fade-out');
        }
    });
});

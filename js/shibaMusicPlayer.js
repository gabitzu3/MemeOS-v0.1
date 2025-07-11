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
    const playlist = [
        'assets/audio/lofi1.mp3',
        'assets/audio/lofi2.mp3',
        'assets/audio/lofi3.mp3',
        'assets/audio/lofi4.mp3',
        'assets/audio/lofi5.mp3',
        'assets/audio/lofi6.mp3',
    ];
    let currentTrackIndex = 0;
    const music = new Audio();
    let isPlaying = false;
    let hasBeenClicked = false;
    let lastVolume = 0.5;
    music.volume = lastVolume;
    function playTrack(index) {
        if (index >= 0 && index < playlist.length) {
            currentTrackIndex = index;
            music.src = playlist[currentTrackIndex];
            music.play().then(() => {
                isPlaying = true;
                updatePlayPauseButton();
                updateTrackInfo();
            }).catch(error => console.error("Playback failed:", error));
        }
    }
    function togglePlayPause() {
        if (isPlaying) {
            music.pause();
        } else {
            music.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    }
    function playNext() {
        const nextIndex = (currentTrackIndex + 1) % playlist.length;
        playTrack(nextIndex);
    }
    function playPrev() {
        const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        playTrack(prevIndex);
    }
    music.addEventListener('ended', playNext);
    function createPlayerUI() {
        bubble.innerHTML = `
            <div class="shiba-player-controls">
                <div id="shiba-track-info" class="shiba-track-info"></div>
                <div class="shiba-buttons">
                    <button id="shiba-prev-btn">⏮️</button>
                    <button id="shiba-play-pause-btn">▶️</button>
                    <button id="shiba-next-btn">⏭️</button>
                </div>
                <div class="shiba-volume-controls">
                    <button id="shiba-mute-btn">🔊</button>
                    <input type="range" id="shiba-volume-slider" min="0" max="1" step="0.01" value="${music.volume}">
                </div>
            </div>
        `;
        bubble.classList.add('player-active');
        document.getElementById('shiba-prev-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            playPrev();
        });
        document.getElementById('shiba-play-pause-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlayPause();
        });
        document.getElementById('shiba-next-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            playNext();
        });
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
            music.muted = music.volume === 0;
            updateMuteButton();
        });
        updatePlayPauseButton();
        updateMuteButton();
        updateTrackInfo();
    }
    function updateTrackInfo() {
        const trackInfo = document.getElementById('shiba-track-info');
        if (trackInfo) {
            const trackName = playlist[currentTrackIndex].split('/').pop();
            trackInfo.textContent = `Playing: ${trackName}`;
        }
    }
    function updatePlayPauseButton() {
        const playPauseBtn = document.getElementById('shiba-play-pause-btn');
        if (playPauseBtn) {
            playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
        }
    }
    function updateMuteButton() {
        const muteBtn = document.getElementById('shiba-mute-btn');
        if (muteBtn) {
            if (music.muted || music.volume === 0) {
                muteBtn.textContent = '🔇';
            } else {
                muteBtn.textContent = '🔊';
            }
        }
    }
    shibaPlayer.addEventListener('click', () => {
        if (!hasBeenClicked) {
            hasBeenClicked = true;
            bubble.classList.remove('initial-show');
            createPlayerUI();
            playTrack(currentTrackIndex);
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

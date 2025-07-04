document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('sus-audio');

    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error("Audio autoplay failed:", error);
        });
    }
});

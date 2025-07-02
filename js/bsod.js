function triggerBSOD() {
    const bsod = document.createElement('div');
    bsod.id = 'bsod';
    bsod.innerHTML = `
        <div id="bsod-content">
            <h1>:(</h1>
            <p>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
            <p id="bsod-progress">0% complete</p>
            <br/>
            <div class="qr-code">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.youtube.com/watch?v=dQw4w9WgXcQ" alt="QR Code to Rickroll">
            </div>
            <p style="font-size: 1em;">
                For more information about this issue and possible fixes, visit https://www.instagram.com/popgabitzu
                <br/><br/>
                If you call a support person, give them this info:
                <br/>
                Stop Code: MEME_OS_HAS_CRASHED
            </p>
        </div>
    `;
    document.body.appendChild(bsod);
    bsod.style.display = 'flex'; // Show the BSOD

    let progress = 0;
    const progressEl = document.getElementById('bsod-progress');
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10);
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            // Optional: could actually reload the page here after a delay
            // setTimeout(() => location.reload(), 2000);
        }
        if (progressEl) {
            progressEl.textContent = `${progress}% complete`;
        }
    }, 500);
}

function createRickrollWindow() {
  const win = makeWindow('Rickroll');
  win.dataset.app = 'rickroll';
  const content = document.createElement('div');
  content.className = 'w-full h-full';
  content.innerHTML = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ay8lynMZ4mE?autoplay=1" title="YouTube video player" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `;
  win.appendChild(content);
  return win;
}
window.apps = window.apps || {};
window.apps.rickroll = { createWindow: createRickrollWindow };
window.apps.youtube = { createWindow: createRickrollWindow };
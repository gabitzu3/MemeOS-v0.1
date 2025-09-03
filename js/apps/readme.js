function createReadmeWindow() {
  const win = makeWindow('Read me please!');
  win.style.width = '1200px';
  win.style.height = '500px';
  win.dataset.app = 'readme';
  const content = document.createElement('div');
  content.className = 'p-4 text-lg text-white-800 dark:text-white font-mono';
  content.style.whiteSpace = 'pre-wrap';
  content.style.wordWrap = 'break-word';
  const message = `Hello there, intrepid user of MemeOS!\n\nIf you're reading this, it means you've stumbled upon my little corner of the digital universe.\n\nThis OS is a playground, a sandbox, a testament to what happens when you mix a bit of code with a lot of memes. It's not perfect, it's not polished, but it's ours.\n\nFeel free to explore, break things, and maybe even create something new. The only rule is to have fun.\n\nCheers,\nThe Creator`;
  const instagramLink = `
<br><br>
My Instagram: <a href="https://instagram.com/popgabitzu" target="_blank" class="text-blue-500 hover:underline">@popgabitzu</a>
`;
  content.innerHTML = message + instagramLink;
  win.appendChild(content);
  return win;
}
window.apps = window.apps || {};
window.apps.readme = {
  createWindow: createReadmeWindow
};

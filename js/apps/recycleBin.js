function createRecycleBinWindow() {
    const win = makeWindow('Recycle Bin', 'w-[300px] h-[200px]');
    win.dataset.app = 'recycleBin';

    const content = document.createElement('div');
    content.className = 'p-4 text-center flex items-center justify-center h-full text-white';
    content.textContent = 'It\'s empty. What did you expect?';
    
    win.appendChild(content);
    return win;
}

window.apps = window.apps || {};
window.apps.recycleBin = {
  createWindow: createRecycleBinWindow
};

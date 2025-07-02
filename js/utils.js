/* Shared helpers */
function makeWindow(title = 'Window') {
  const win = document.createElement('div');
  win.className = 'window absolute top-20 left-20 w-96 h-64 bg-gray-900 text-white shadow-lg rounded flex flex-col';

  const bar = document.createElement('div');
  bar.className = 'titlebar cursor-move bg-gray-800 px-2 py-1 text-sm flex justify-between items-center';
  bar.textContent = title;

  const close = document.createElement('button');
  close.textContent = '×';
  close.className = 'ml-auto text-red-400 hover:text-red-200';
  close.onclick = () => {
    const evt = new Event('close');
    win.dispatchEvent(evt);
    win.remove();
  };
  bar.appendChild(close);

  win.appendChild(bar);
  return win;
}

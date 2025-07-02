function createOhioFileExplorerWindow() {
    // --- All constants and helpers are now inside the function scope ---
    const TOOLTIPS = {
        'TOP_SECRET_DO_NOT_OPEN': 'Don’t open this.',
        'portal.gif': 'Probably not a virus.',
        'hope.exe': 'Definitely not stolen.',
    };

    const VFS = {
        'C:': {
            type: 'drive',
            children: {
                'MemeOS': { type: 'folder', children: {} },
                'Music': {
                    type: 'folder',
                    children: {
                        'never-gonna-give-you-up.mp3': { type: 'file' },
                        'sigma-theme.mp3': { type: 'file' },
                        'russian-hardbass.mp3': { type: 'file' },
                    }
                },
                'Ohio': {
                    type: 'folder',
                    children: {
                        'EverythingIsFine.jpg': { type: 'file' },
                        'OhioLaws.pdf': { type: 'file' },
                        'portal.gif': { type: 'file' },
                    }
                },
                'School': {
                    type: 'folder',
                    children: {
                        'Homework.docx': { type: 'file' },
                        'ZoomClass.mp3': { type: 'file' },
                    }
                },
                'TOP_SECRET_DO_NOT_OPEN': {
                    type: 'folder',
                    children: {
                        'flipper-zero-plans.nsa': { type: 'file' },
                        'GTA6_ReleaseDate.txt': { type: 'file' },
                        'leak.mp4': { type: 'file' },
                    }
                },
                'Videos': {
                    type: 'folder',
                    children: {
                        'HowToBeAlpha.mov': { type: 'file' },
                        'sus-compilation.webm': { type: 'file' },
                        'toilet-cam-42.mp4': { type: 'file' },
                    }
                },
                'flipper-zero-manual.pdf': { type: 'file' },
                'konami.txt': { type: 'file' },
                'my-brain.png': { type: 'file' },
                'readme.md': { type: 'file' },
            }
        },
        'Recycle Bin': {
            type: 'folder',
            children: {
                'hope.exe': { type: 'file' },
                'your-dreams.docx': { type: 'file' },
                'your-privacy.settings': { type: 'file' },
            }
        }
    };

    const FILE_CONTENTS = {
        'GTA6_ReleaseDate.txt': { type: 'text', content: '🤡 2077, maybe.' },
        'leak.mp4': { type: 'video', src: 'js/apps/file_explorer_files/C/TOP_SECRET_DO_NOT_OPEN/leak.mp4' },
        'flipper-zero-plans.nsa': { type: 'text', content: '01001001 01101110 01110100 01100101 01101100 00100000 01101001 00111001 00111001 00111001 00110000 00110000 01001011 00100000 01100001 01110100' },
        'Homework.docx': { type: 'text', content: 'ChatGPT already did this for me 😎' },
        'ZoomClass.mp3': { type: 'audio', src: 'js/apps/file_explorer_files/C/School/ZoomClass.mp3' },
        'EverythingIsFine.jpg': { type: 'image', src: 'js/apps/file_explorer_files/C/Ohio/EverythingIsFine.jpg' },
        'portal.gif': { type: 'text-with-image', content: 'Initiating portal to Ohio... Connection failed: Reality too stable.', src: 'js/apps/file_explorer_files/C/Ohio/portal.gif' },
        'OhioLaws.pdf': { type: 'text', content: 'There are none.' },
        'never-gonna-give-you-up.mp3': { type: 'audio', src: 'js/apps/file_explorer_files/C/Music/never-gonna-give-you-up.mp3' },
        'sigma-theme.mp3': { type: 'audio', src: 'js/apps/file_explorer_files/C/Music/sigma-theme.mp3' },
        'russian-hardbass.mp3': { type: 'audio', src: 'js/apps/file_explorer_files/C/Music/russian-hardbass.mp3' },
        'sus-compilation.webm': { type: 'youtube', src: 'https://www.youtube.com/embed/cmdnE4OaNBQ?autoplay=1' },
        'toilet-cam-42.mp4': { type: 'youtube', src: 'https://www.youtube.com/embed/lHmgfkKkZJo?autoplay=1' },
        'HowToBeAlpha.mov': { type: 'youtube', src: 'https://www.youtube.com/embed/jIMmzrpjk00?autoplay=1' },
        'your-dreams.docx': { type: 'text', content: '(file is empty)' },
        'your-privacy.settings': { type: 'text', content: 'sold.exe has been successfully executed.' },
        'hope.exe': { type: 'text', content: '404 Hope Not Found' },
        'konami.txt': { type: 'text', content: '↑↑↓↓←→←→BA' },
        'readme.md': { type: 'text', content: 'This file has no idea what’s going on either.' },
        'flipper-zero-manual.pdf': { type: 'text', content: 'Manual? Just press buttons until something cool happens.' },
        'my-brain.png': { type: 'image', src: 'js/apps/file_explorer_files/my-brain.png' },
    };

    function openFile(name, path) {
        const fileData = FILE_CONTENTS[name];
        if (!fileData) {
            const alert = makeWindow(name, 'w-auto h-auto');
            const msg = document.createElement('div');
            msg.className = 'p-4';
            msg.textContent = 'Cannot open this file. It is probably not a real file.';
            alert.appendChild(msg);
            document.getElementById('desktop').appendChild(alert);
            focusWindow(alert);
            return;
        }

        let win;
        if (fileData.type === 'text-with-image') {
            win = makeWindow(name, 'w-[500px] h-auto flex flex-col');
        } else {
            win = makeWindow(name, 'w-[400px] h-[300px] flex flex-col');
        }
        
        const content = document.createElement('div');
        content.className = 'p-2 bg-white text-black flex-grow';

        switch (fileData.type) {
            case 'text':
                content.textContent = fileData.content;
                break;
            case 'image':
                content.innerHTML = `<img src="${fileData.src}" class="w-full h-full object-contain">`;
                break;
            case 'audio':
                content.innerHTML = `<audio controls autoplay src="${fileData.src}" class="w-full"></audio>`;
                break;
            case 'video':
                content.innerHTML = `<video controls autoplay src="${fileData.src}" class="w-full h-full"></video>`;
                break;
            case 'youtube':
                content.innerHTML = `<iframe width="100%" height="100%" src="${fileData.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                break;
            case 'text-with-image':
                content.innerHTML = `<p class="p-2 text-center">${fileData.content}</p><img src="${fileData.src}" class="w-full h-auto object-contain p-2">`;
                break;
        }

        win.appendChild(content);
        document.getElementById('desktop').appendChild(win);
        focusWindow(win);
    }

    function getIconForFile(filename) {
        const extension = filename.split('.').pop().toLowerCase();
        switch (extension) {
            case 'mp3': return 'https://img.icons8.com/color/48/music.png';
            case 'mp4':
            case 'webm':
            case 'mov': return 'https://img.icons8.com/color/48/video-file.png';
            case 'jpg':
            case 'gif':
            case 'png': return 'https://img.icons8.com/color/48/image-file.png';
            case 'txt':
            case 'md': return 'https://img.icons8.com/color/48/txt.png';
            case 'pdf': return 'https://img.icons8.com/color/48/pdf.png';
            case 'docx': return 'https://img.icons8.com/color/48/word.png';
            case 'exe': return 'https://img.icons8.com/color/48/exe.png';
            case 'nsa': return 'https://img.icons8.com/color/48/spyware-free.png';
            case 'settings': return 'https://img.icons8.com/color/48/settings--v1.png';
            default: return 'https://img.icons8.com/color/48/document.png';
        }
    }

    const win = makeWindow('Ohio File Explorer', 'w-[900px] h-[700px]');
    win.dataset.app = 'fileExplorer';

    const content = document.createElement('div');
    content.className = 'flex flex-col h-full bg-gray-200 text-black font-sans';
    content.innerHTML = `
        <div class="p-1 bg-gray-100 border-b border-gray-400 flex items-center">
            <button class="px-2 py-1 hover:bg-gray-300 rounded">⬆</button>
            <input type="text" value="C:\" class="flex-grow p-1 border border-gray-500 rounded mx-2" id="path-bar" readonly>
            <input type="text" placeholder="Search..." class="w-1/3 p-1 border border-gray-500 rounded" id="search-bar">
        </div>
        <div class="flex flex-grow overflow-hidden">
            <div class="w-1/3 bg-white p-1 overflow-y-auto border-r border-gray-400" id="nav-pane"></div>
            <div class="w-2/3 p-2 overflow-y-auto flex flex-wrap content-start" id="main-pane"></div>
        </div>
        <div class="p-1 bg-gray-100 border-t border-gray-400 text-xs flex justify-between">
            <p id="item-count">0 items</p>
            <p id="status-bar">MemeOS Build 0.1</p>
        </div>
    `;

    win.appendChild(content);

    const navPane = content.querySelector('#nav-pane');
    const mainPane = content.querySelector('#main-pane');
    const pathBar = content.querySelector('#path-bar');
    const itemCountStatus = content.querySelector('#item-count');
    const searchBar = content.querySelector('#search-bar');
    const upButton = content.querySelector('button');

    let currentPath = 'C:';

    function renderNavPane(fs, container, pathPrefix = '') {
        container.innerHTML = '';
        for (const [name, item] of Object.entries(fs)) {
            if (item.type === 'folder' || item.type === 'drive') {
                const fullPath = pathPrefix ? pathPrefix + '\\' + name : name;
                const entry = document.createElement('div');
                entry.className = 'p-1 cursor-pointer hover:bg-blue-200 rounded';
                entry.textContent = `📁 ${name}`;
                entry.dataset.path = fullPath;
                entry.addEventListener('click', (e) => {
                    e.stopPropagation();
                    renderMainPane(getFolder(fullPath), fullPath);
                });
                container.appendChild(entry);
            }
        }
    }

    function renderMainPane(folder, path) {
        mainPane.innerHTML = '';
        pathBar.value = path;
        currentPath = path;
        const items = folder.children || {};
        itemCountStatus.textContent = `${Object.keys(items).length} items`;

        for (const [name, item] of Object.entries(items)) {
            const icon = document.createElement('div');
            icon.className = 'file-icon flex flex-col items-center p-2 m-1 w-24 text-center cursor-pointer hover:bg-blue-200 rounded';

            const tooltipText = TOOLTIPS[name] || (name.endsWith('.exe') ? 'Trust me bro.' : '');
            if (tooltipText) {
                icon.title = tooltipText;
            }
            const iconUrl = item.type === 'folder' ? 'https://img.icons8.com/color/48/folder-invoices.png' : getIconForFile(name);
            icon.innerHTML = `
                <img src="${iconUrl}" class="w-12 h-12"/>
                <span class="text-xs mt-1 break-words">${name}</span>
            `;

            if (item.type === 'folder') {
                icon.addEventListener('dblclick', () => {
                    const newPath = path + '\\' + name;
                    renderMainPane(item, newPath);
                });
            } else {
                icon.addEventListener('dblclick', () => openFile(name, path + '\\' + name));
            }
            icon.addEventListener('contextmenu', (e) => showContextMenu(e, icon));
            mainPane.appendChild(icon);
        }
    }

    function getFolder(path) {
        if (path === 'C:') return VFS['C:'];
        if (path === 'Recycle Bin') return VFS['Recycle Bin'];
        const parts = path.split('\\');
        let current = VFS[parts[0]];
        for (let i = 1; i < parts.length; i++) {
            if (!current || !current.children) return null; // Path is invalid
            current = current.children[parts[i]];
        }
        return current;
    }

    upButton.addEventListener('click', () => {
        if (currentPath.includes('\\')) {
            const parts = currentPath.split('\\');
            parts.pop();
            const newPath = parts.join('\\');
            const folder = getFolder(newPath);
            if (folder) {
                renderMainPane(folder, newPath);
            }
        }
    });

    searchBar.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const responses = [
                'No results found in this reality.',
                'Did you mean: Shrek.exe?',
                'Searching... still searching... maybe check under the couch?',
                'Error: Universe not found.',
            ];
            const response = responses[Math.floor(Math.random() * responses.length)];
            const alert = makeWindow('Search Results', 'w-auto h-auto');
            const msg = document.createElement('div');
            msg.className = 'p-4';
            msg.textContent = response;
            alert.appendChild(msg);
            document.getElementById('desktop').appendChild(alert);
            searchBar.value = '';
        }
    });

    // Initial Render
    renderNavPane(VFS, navPane);
    renderMainPane(VFS['C:'], 'C:');

    return win;
}
window.apps = window.apps || {};
window.apps.fileExplorer = {
  createWindow: createOhioFileExplorerWindow
};
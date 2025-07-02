function showContextMenu(event, targetElement) {
    event.preventDefault();

    // Hide any existing context menu
    hideContextMenu();

    const menu = document.createElement('div');
    menu.id = 'context-menu';
    menu.className = 'context-menu';
    menu.style.display = 'block';
    menu.style.left = `${event.pageX}px`;
    menu.style.top = `${event.pageY}px`;

    menu.innerHTML = `
        <div class="context-menu-item" id="ctx-rename">Rename</div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" id="ctx-delete">Delete</div>
    `;

    document.body.appendChild(menu);

    document.getElementById('ctx-rename').addEventListener('click', () => {
        const newName = prompt('Enter new name:', 'sus');
        if (newName) {
            const nameSpan = targetElement.querySelector('span');
            nameSpan.textContent = newName;
        }
        hideContextMenu();
    });

    
    document.getElementById('ctx-delete').addEventListener('click', () => {
        // Placeholder for vine boom sound
        targetElement.remove();
        hideContextMenu();
    });

    document.addEventListener('click', hideContextMenu, { once: true });
}

function hideContextMenu() {
    const menu = document.getElementById('context-menu');
    if (menu) {
        menu.remove();
    }
}

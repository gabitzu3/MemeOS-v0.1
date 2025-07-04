function createPasswordSpinnerWindow() {
    const win = makeWindow('Password Spinner');
    win.classList.remove('w-96', 'h-64');
    win.style.width = '800px';
    win.style.height = '640px';

    win.dataset.app = 'passwordSpinner';

    const iframe = document.createElement('iframe');
    iframe.src = 'js/apps/passwordSpinner_assets/original.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    win.appendChild(iframe);

    iframe.addEventListener('load', () => {
        try {
            iframe.contentDocument.addEventListener('mousedown', () => {
                win.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            });
        } catch (e) {
            console.error("Password Spinner: Failed to attach focus forwarder to iframe.", e);
        }
    });

    return win;
}

window.apps = window.apps || {};
const passwordSpinnerApp = {
    createWindow: createPasswordSpinnerWindow,
    name: 'Password Spinner',
    icon: 'js/apps/passwordSpinner_icon.png'
};
window.apps.passwordSpinner = passwordSpinnerApp;
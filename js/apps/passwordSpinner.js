function createPasswordSpinnerWindow() {
    const win = makeWindow('Password Spinner');

    win.classList.remove('w-96', 'h-64');
    win.style.width = '800px';
    win.style.height = '640px';

    const iframe = document.createElement('iframe');
    iframe.src = 'js/apps/passwordSpinner_assets/original.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    win.appendChild(iframe);

    return win;
}

window.apps = window.apps || {};
const passwordSpinnerApp = {
    createWindow: createPasswordSpinnerWindow,
    name: 'Password Spinner',
    icon: 'js/apps/passwordSpinner_assets/logo.png'
};

window.apps['password-spinner'] = passwordSpinnerApp;
window.apps.passwordSpinner = passwordSpinnerApp;
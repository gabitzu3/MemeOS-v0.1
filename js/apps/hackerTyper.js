function createHackerTyperWindow() {
  const win = makeWindow('Hacker Typer');
  win.dataset.app = 'hackerTyper';
  win.style.width = '700px';
  win.style.height = '500px';
  win.tabIndex = 0; // Make focusable
  win.focus();

  const pre = document.createElement('pre');
  pre.className = 'p-2 text-green-400 bg-black h-full overflow-auto font-mono whitespace-pre-wrap';
  pre.style.flex = '1';
  win.appendChild(pre);

  // Very long simulated "hacker" script
  const codeLines = [
    '#include <stdio.h>',
    '#include <stdlib.h>',
    '#include <string.h>',
    '',
    'int main(int argc, char *argv[]) {',
    '    char buffer[256];',
    '    printf("Initializing buffer overflow test...\\n");',
    '    for(int i=0; i<256; i++) {',
    '        buffer[i] = \'A\';',
    '    }',
    '    printf("Buffer filled. Executing payload...\\n");',
    '',
    '    system("echo Exploit successful!");',
    '    printf("Done.\\n");',
    '    return 0;',
    '}',
    '',
    '=== Log output ===',
    '[*] Connecting to target...',
    '[*] Sending malicious payload...',
    '[*] Overwriting return address...',
    '[*] Gaining shell access...',
    '[*] Downloading files...',
    '[*] Uploading reverse shell...',
    '[!] Intrusion detected. Masking footprint...',
    '[*] Kernel panic -- syncing...',
    '[*] /dev/null mounted to brain interface...',
    '[+] Hack complete. System compromised.',
    'user@root:~#'
  ];

  // Duplicate to make it LONG
  const code = codeLines.join('\n') + '\n';
  const fullCode = code.repeat(30); // Make it LONG

  let idx = 0;

  const typeListener = (e) => {
    if (!document.body.contains(win)) return; // Stop if window was closed
    if (idx >= fullCode.length) return;       // Stop typing when done

    pre.textContent += fullCode[idx++];
    pre.scrollTop = pre.scrollHeight;
  };

  document.addEventListener('keydown', typeListener);

  win.addEventListener('close', () => {
    document.removeEventListener('keydown', typeListener);
  });

  return win;
}

window.apps = window.apps || {};
window.apps.hackerTyper = { createWindow: createHackerTyperWindow };
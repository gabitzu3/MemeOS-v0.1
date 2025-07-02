/* MemeOS Terminal */
function createTerminalWindow() {
  const win = makeWindow('Terminal');
  win.classList.remove('w-96', 'h-64');
  win.classList.add('w-[700px]', 'h-[500px]');
  win.dataset.app = 'terminal';

  const content = document.createElement('div');
  content.className = 'flex flex-col h-full';

  const output = document.createElement('div');
  output.className = 'flex-1 p-2 overflow-auto text-green-400 font-mono text-sm';

  const inputLine = document.createElement('div');
  inputLine.className = 'flex p-1';
  inputLine.innerHTML = '<span class="text-green-400">$</span>';

  const input = document.createElement('input');
  input.className = 'flex-1 bg-black text-green-400 outline-none ml-2';
  input.placeholder = '';
  inputLine.appendChild(input);

  content.appendChild(output);
  content.appendChild(inputLine);
  win.appendChild(content);

  const write = (text) => {
    if (text.includes('\n')) {
        const pre = document.createElement('pre');
        pre.textContent = text;
        pre.className = 'font-mono';
        output.appendChild(pre);
    } else {
        output.innerHTML += text.replace(/ /g, '&nbsp;') + '<br/>';
    }
    output.scrollTop = output.scrollHeight;
  };

  write('MemeOS v0.1. Type `help` for a list of commands.');

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      write(`> ${cmd}`);
      handleCmd(cmd, write);
      input.value = '';
      output.scrollTop = output.scrollHeight;
    }
  });

  win.addEventListener('focus', () => input.focus(), true);
  setTimeout(() => input.focus(), 0);

  return win;
}

function handleCmd(cmd, write) {
  const [command, ...args] = cmd.toLowerCase().split(' ');
  switch (command) {
    case 'help':
        const commands = {
            'help': 'Shows this list of commands.',
            'date': 'Displays the current date.',
            'time': 'Displays the current time.',
            'clear': 'Clears the terminal screen.',
            'neofetch': 'Shows system information (totally real).',
            'cowsay [msg]': 'A cow says whatever you want.',
            'echo [text]': 'Prints back the text you provide.',
            'whoami': 'Reveals your true identity.',
            'matrix': 'Are you the one?',
            'meme': 'Displays a classic meme.',
            'rickroll': 'You know what this does.',
            'taskmgr': 'Opens the Task Manager.',
            'scan': 'Scans for... threats.',
            'sudo [cmd]': 'Execute a command with superuser privileges.',
            'shutdown': 'Turns off the computer (not really).',
            'reboot': 'Restarts the computer (just kidding).',
        };
        let helpText = 'Available commands:\n';
        for (const [cmd, desc] of Object.entries(commands)) {
            helpText += `  ${cmd.padEnd(15)} - ${desc}\n`;
        }
        write(helpText);
        break;
    case 'echo':
      write(args.join(' '));
      break;
    case 'whoami':
      write('Gabitzu');
      break;
    case 'matrix':
      write('<span style="color: #0F0;">Wake up, Neo... The Matrix has you...</span>');
      break;
    case 'meme':
        const memes = [
            'All your base are belong to us.',
            'I can has cheezburger?',
            'One does not simply walk into Mordor.',
            'This is fine.',
            'Press F to pay respects.',
            'They don\'t think it be like it is, but it do.'
        ];
        write(memes[Math.floor(Math.random() * memes.length)]);
        break;
    case 'shutdown':
        write('Are you sure? MemeOS is the only thing that matters. (This command is for display purposes only)');
        break;
    case 'reboot':
        write('Rebooting... just kidding. You thought.');
        break;
    case 'sudo':
      if (args.join(' ') === 'make-me-a-sandwich') {
        write('Okay. You are now a sandwich. 🥪');
      } else {
        write('Permission denied. This incident will be reported.');
      }
      break;
    case 'rickroll':
      write('Opening Rickroll...');
      window.openApp('rickroll');
      break;
    case 'taskmgr':
      write('Opening Task Manager...');
      window.openApp('taskManager');
      break;
    case 'scan':
      write('Opening Skibidi Toilet Antivirus...');
      window.openApp('antivirus');
      break;
    case 'clear':
      document.querySelector(`[data-app="terminal"] .overflow-auto`).innerHTML = '';
      break;
    case 'date':
      write(new Date().toLocaleDateString());
      break;
    case 'time':
      write(new Date().toLocaleTimeString());
      break;
    case 'neofetch':
      write(`
        .--.      Gabitzu@MemeOS
       |o_o |     --------------
       |:_/ |     OS: MemeOS x86_64
      //   \ \    Kernel: 6.9.420-generic
     (|     | )   Uptime: 69 days, 4 hours, 20 mins
    /'\_   _/\`\   Shell: bash 5.1.16
    \___)=(___/
      `);
      break;
    case 'open':
      if (args[0] === 'barnacle-browser' && args[1] === '--incognito') {
        write('Nice try, buddy. This mode still remembers everything.');
        window.openApp('barnacle-browser', { incognito: true });
      } else {
        write('Usage: open barnacle-browser --incognito');
      }
      break;
    case 'cowsay':
      const message = args.join(' ') || 'Moo!';
      const art = `         < ${message} >
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`;
      write(art);
      break;
    default:
      write(`Command not found: ${cmd}`);
  }
}

window.apps = window.apps || {};
window.apps.terminal = { createWindow: createTerminalWindow };


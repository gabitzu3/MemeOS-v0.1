// Konami Code listener → open HackerTyper
const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let pos = 0;
document.addEventListener('keydown', e => {
  if (e.key === konami[pos]) {
    pos++;
    if (pos === konami.length) {
      window.openApp('hackerTyper');
      pos = 0;
    }
  } else {
    pos = 0;
  }
});

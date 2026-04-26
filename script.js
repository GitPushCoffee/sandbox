// Counter widget
const display = document.getElementById('count');
const btnInc = document.getElementById('btn-inc');
const btnDec = document.getElementById('btn-dec');
const btnReset = document.getElementById('btn-reset');

if (display && btnInc && btnDec && btnReset) {
  let count = 0;

  function updateDisplay() {
    display.textContent = count;
    display.style.color = count < 0 ? '#c0392b' : 'var(--color-primary)';
  }

  btnInc.addEventListener('click', () => { count++; updateDisplay(); });
  btnDec.addEventListener('click', () => { count--; updateDisplay(); });
  btnReset.addEventListener('click', () => { count = 0; updateDisplay(); });
}

// Highlight active nav link
document.querySelectorAll('nav ul a').forEach(link => {
  if (link.href === location.href) {
    link.classList.add('active');
  }
});

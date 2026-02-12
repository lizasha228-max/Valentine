
setTimeout(() => {
  const overlay = document.querySelector('.overlay-img');
  overlay.style.display = 'block';
}, 7500);

document.addEventListener('mousemove', () => {
  document.getElementById('audio').play();
}, { once: true });
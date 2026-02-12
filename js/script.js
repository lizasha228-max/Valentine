const btnNo = document.querySelector(".no__button");
const cont  = document.querySelector(".container");

cont.addEventListener('mousemove', (e) => {
  const cRect = cont.getBoundingClientRect();
  const bRect = btnNo.getBoundingClientRect();

  const btnX = bRect.right + bRect.width / 2;
  const btnY = bRect.top + bRect.height / 2;

  const dx = e.clientX - btnX;
  const dy = e.clientY - btnY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 100) {
    const maxX = cRect.width - bRect.width;
    const maxY = cRect.height - bRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.right = x + 'px';
    btnNo.style.top = y + 'px';
  }
});






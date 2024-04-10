function handleButtonClick3(section) {
  const scrollY = section.getBoundingClientRect().top + window.scrollY; // Знайдіть вертикальну позицію відносно поточного розташування прокрутки.
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  });
}

function scrollAnimation3() {
  const section = document.getElementById("section-8");

  document.querySelector('.home-section-7__btn-down').removeAttribute('href');
  document.body.addEventListener('click', function scroll(evt) {
    const target = evt.target.closest('.home-section-7__btn-down');
    if (!target) return;
    evt.preventDefault();
    handleButtonClick3(section);
  });
}

scrollAnimation3();

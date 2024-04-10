const buttons1 = document.querySelectorAll('.home-section-8__vr-tour__btns.aramis button');
const iframe1 = document.getElementById('vrTourFrame1');

buttons1.forEach(button => {
  button.addEventListener('click', function() {
    // Видаляємо клас active у всіх кнопок
    buttons1.forEach(btn => {
      btn.classList.remove('active');
    });

    // Додаємо клас active до поточної кнопки
    this.classList.add('active');

    const newSrc = this.getAttribute('data-src');
    iframe1.src = newSrc;
  });

  // Встановлюємо першу кнопку як активну та завантажуємо посилання по дефолту
  buttons1[0].click();
});

const buttons2 = document.querySelectorAll('.home-section-8__vr-tour__btns.athos button');
const iframe2 = document.getElementById('vrTourFrame2');

buttons2.forEach(button => {
  button.addEventListener('click', function() {
    // Видаляємо клас active у всіх кнопок
    buttons2.forEach(btn => {
      btn.classList.remove('active');
    });

    // Додаємо клас active до поточної кнопки
    this.classList.add('active');

    const newSrc = this.getAttribute('data-src');
    iframe2.src = newSrc;
  });

  // Встановлюємо першу кнопку як активну та завантажуємо посилання по дефолту
  buttons2[0].click();
});

var buttonsVillas = document.querySelectorAll('.button-villas button');

buttonsVillas.forEach(function(button) {
  button.addEventListener('click', function() {
    var villa = this.getAttribute('data-villa');
    var vrTour = document.querySelector('.home-section-8__vr-tour.' + villa);

    buttonsVillas.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    if (villa === 'aramis') {
      vrTour.classList.add('active');
      document.querySelector('.home-section-8__vr-tour.athos').classList.remove('active');
      document.querySelector('.home-section-8__vr-tour__btns.athos').classList.remove('active');
      document.querySelector('.home-section-8__vr-tour__btns.aramis').classList.add('active');
    } else if (villa === 'athos') {
      vrTour.classList.add('active');
      document.querySelector('.home-section-8__vr-tour.aramis').classList.remove('active');
      document.querySelector('.home-section-8__vr-tour__btns.aramis').classList.remove('active');
      document.querySelector('.home-section-8__vr-tour__btns.athos').classList.add('active');
    }
  });

  // Встановлюємо першу кнопку як активну та завантажуємо посилання по дефолту
  buttonsVillas[1].click();
});

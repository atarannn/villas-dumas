import $ from 'jquery';

$(document).ready(function() {
  $.Tween.propHooks.number = {
    get(tween) {
      const num = tween.elem.innerHTML.replace(/^[^\d-]+/, ' ');
      return parseFloat(num) || 0;
    },

    set(tween) {
      const opts = tween.options;
      let changedData = tween.now
        .toFixed(0)
        .toString()
        .split('');
      changedData.splice(0, 0, ' ');
      changedData = changedData.join('');
      tween.elem.innerHTML =
        changedData;
    },
  };
  addIntersectionOnceWithCallback($('#num-1')[0], () => {
    $('#num-1')
      .delay(200)
      .animate(
        { number: 12 },
        {duration: 2000},
      );
  });
  addIntersectionOnceWithCallback($('#num-2')[0], () => {
    $('#num-2')
      .delay(200)
      .animate(
        { number: 8 },
        {duration: 2000},
      );
  });
  addIntersectionOnceWithCallback($('#num-3')[0], () => {
    $('#num-3')
      .delay(200)
      .animate(
        {number: 20 },
        {duration: 2000,},
      );
  });
  addIntersectionOnceWithCallback($('#num-4')[0], () => {
    $('#num-4')
      .delay(200)
      .animate(
        {number: 2 },
        {duration: 2000,},
      );
  });
});

function addIntersectionOnceWithCallback(el, cb = () => {}) {
  const num = el;
  const target = num;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb();
        observer.unobserve(target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1,
  });
  observer.observe(target);
}

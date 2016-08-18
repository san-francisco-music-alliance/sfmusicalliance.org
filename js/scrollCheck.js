var el = document.querySelector('.back-box'),
    elOffset = el.getBoundingClientRect().top,
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    is

function check(e) {
  if(window.scrollY > 105) {
    el.style.position = 'fixed';
    el.style.top = '20px';
  }
  else {
    el.style.position = 'absolute';
    el.style.top = '120px';
  }
}

if(isMobile) {
  window.addEventListener('scroll', check.bind(this));

}
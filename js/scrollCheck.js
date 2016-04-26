var el = document.querySelector('.back-box'),
    elOffset = el.getBoundingClientRect().top,
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function check(e) {
  console.log(e);
  if(window.scrollY + 20 >= elOffset) {
    el.style.position = 'fixed'
    el.style.top = '20px';
  }
  else {
    el.style.position = 'absolute'
    el.style.top = '50px';
  }
}

if(isMobile) {
  window.addEventListener('scroll', check.bind(this));
  window.addEventListener('resize', check.bind(this));
}
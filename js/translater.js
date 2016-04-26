var element = document.querySelector('.three-d'),
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    moveEvent = isMobile ? 'touchmove' : 'mousemove',
    frame = false,
    throttler = false;


function handleMove(clientX, clientY){
    var x = ((0.5 - (clientY / window.innerHeight))) * 25,
        y = (0.5 - (clientX / window.innerWidth)) * 25 * (-1);

  element.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
}

function start() {
  document.body.addEventListener(moveEvent, function(event) {
    handleMove(event.clientX, event.clientY);
  });
}

if(!isMobile) {
  start();
}
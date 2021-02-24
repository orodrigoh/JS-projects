const key = document.querySelector('.key');
const code = document.querySelector('.code');
const eventx = document.querySelector('.event');

document.addEventListener('keypress', (e)=> {
      key.innerHTML = e.key;
      code.innerHTML = e.keyCode;
      eventx.innerHTML = e.code;


})

const menuBtn = document.querySelector('.menu__btn');
const menuLinks = document.querySelector('.menu__links');
const menu = document.querySelector('.menu');



menuBtn.addEventListener('click', ()=> {
      if (menuBtn.classList.contains('open')) {
            menuBtn.classList.remove('open');
            menuLinks.classList.remove('open');
            menu.classList.remove('open');

      } else {
            menuBtn.classList.add('open');
            menuLinks.classList.add('open');
            menu.classList.add('open');

      }


})
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const menulinks = document.querySelector('.menu-links');


const container = document.querySelector('.container');


open.addEventListener('click', callOpen);
close.addEventListener('click', callClose);


function callOpen() {
    container.classList.add('ativo')
    menulinks.classList.add('show')
}

function callClose() {
    container.classList.remove('ativo')
    menulinks.classList.remove('show')

}
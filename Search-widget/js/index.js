const search = document.querySelector('.search');
const input = document.querySelector('.bar');
const container = document.querySelector('.container');

search.addEventListener('click', callSearch)

function callSearch() {
    container.classList.toggle('ativo')
 
}
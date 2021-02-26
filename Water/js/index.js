const slider = document.querySelector('.slider');
const slidecontainer = document.querySelector('.slidecontainer');
const litros = document.querySelector('.litros');
const cups = document.querySelector('.cups-container');
const cup = document.querySelector('.cup');
const faltaValor = document.querySelector('.falta__valor'); 
const addCups = document.querySelectorAll('.add-cup');
const bebeu = document.querySelector('.bebeu');


slider.addEventListener('click', ()=> {
      const valor = slider.value*250/1000;
      litros.innerHTML = valor + ' Litros'
      faltaValor.innerHTML = valor + ' L'

      if (document.querySelector('.add-cup')) {
            cups.innerHTML = '' ;
      }
      cupCreate(slider.value);
      const addCups = document.querySelectorAll('.add-cup');
      fillCup(addCups)
      
})

function cupCreate(value) {
      for (let i = 0; i < value; i++) {
            const div = document.createElement('div');
            div.classList.add('add-cup')
            div.innerHTML = '250</br>ml'
            cups.appendChild(div)
      
      }

}
function fillCup(addCups) {
      addCups.forEach((cup, ind)=> {
            cup.addEventListener('click',()=> {

               removeCup(addCups,cup, ind) 
               callCup(addCups, ind)
               const ativo = document.querySelectorAll('.ativo');
               const valor = slider.value*250/1000;
               faltaValor.innerHTML = valor - ativo.length*0.25 + 'L'
               addPorcent(ativo)
               })
         })   
}


function callCup(addCups, ind) {
      for (let index = 0; index <= ind; index++) {
            addCups[index].classList.add('ativo'); 
         }
}

function removeCup(addCups,cup, ind) {
      if (cup.classList.contains('ativo')) {
            const ativo = document.querySelectorAll('.ativo');
            
            for (let index = ativo.length-1; index >= ind; index--) {
                 addCups[index].classList.remove('ativo');   
                 
            }  
        } 
}

function addPorcent(ativo) {
      bebeu.innerText = '';

      const porcent = Math.floor(ativo.length/slider.value*100) 
      bebeu.innerText = porcent + '%';
      cup.style.gridTemplateRows = `${100 - porcent}% ${porcent}%`
}
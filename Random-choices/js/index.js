const choices = document.querySelector('.choices textarea')
const itens = document.querySelector('.itens')

choices.focus()

choices.addEventListener('keyup', (e)=> {
      const item = choices.value.split(',').map(tag => tag.trim())

      itens.innerHTML = ''

      item.forEach(e => {

             createDiv(e);  

      });

      if (e.keyCode === 13) {
            callRandom();
           
      }
  
})

function createDiv(e) {
      const div = document.createElement('div')
      div.classList.add('btn')
      div.innerHTML = e;
      itens.appendChild(div) 
}

function callRandom() {
      const itensChoice = document.querySelectorAll('.btn')
      const numChoice = itensChoice.length;
      
      const time = setInterval(callChoice ,200)
      const stop = setTimeout(stopRandom, 5000)

      function callChoice() {

      itensChoice.forEach((item)=> {
            item.classList.remove('ativo')
      })      

      itensChoice[rand(0, numChoice)].classList.add('ativo') 
     
      }

      function stopRandom() {
            clearInterval(time)
      }
      
}

function rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}


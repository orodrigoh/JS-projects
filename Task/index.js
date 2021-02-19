
function criaNota() {
    addStickSalvos()
    
    const btnCria = document.querySelector('.criar-nota');

    btnCria.addEventListener('click', (e) => {
        e.preventDefault();

        if(document.querySelectorAll('.stick').length < 18) {
            criaStick();
            delStick()
            salvarSticks();
            
        }    
    
    });
    
}

function criaStick(x, y, txt) {
    const content = document.querySelector('.content');

    const divStick = document.createElement('div');
    divStick.classList.add('stick');
    divStick.style.left = x || '50px';
    divStick.style.top = y || '150px';
    divStick.setAttribute("onmousedown", "dragItem(this)");

    const divTop = document.createElement('div');
    divTop.classList.add('top-stick');

    const divText = document.createElement('div');
    divText.contentEditable = "true";
    divText.classList.add('divText')
    divText.innerText = txt || '';

    const btnDel = document.createElement('a');
    btnDel.classList.add('delete');

    divTop.appendChild(btnDel);
    divStick.appendChild(divTop);
    divStick.appendChild(divText);

    content.appendChild(divStick);
    
}

function delStick() {
const deleta = document.querySelectorAll('.delete');

    deleta.forEach((del)=> {
        del.addEventListener('click', (e)=> {
            e.target.parentElement.parentElement.remove()
            salvarSticks();        
        });      
    });
}

function dragItem(target) {

    // const stickers = document.querySelectorAll('.stick')
    
    // stickers.forEach((target) => {

     function arrastar(e) {
        let x = +target.style.left.slice(0,-2);
        let y = +target.style.top.slice(0,-2);
    
        target.style.left = x + e.movementX + 'px'
        target.style.top = y + e.movementY + 'px'
    //   console.log(target.style.left)
    }
    
    function soltar() {
      document.removeEventListener('mousemove', arrastar)
      document.removeEventListener('mouseup', soltar)
      salvarSticks()

    }
    
    function mousePress() {
      document.addEventListener('mousemove', arrastar)
      document.addEventListener('mouseup', soltar)
      
    }
    
    // target.addEventListener('mousedown', mousePress)
    mousePress()

    //  console.log(target);
    // });

}


function salvarSticks() {
    const allSticks = document.querySelectorAll('.stick'); //Pega todos os li na Nodelist
    const listaSticks = []; //Cria array
    
    for (let stick of allSticks) { 
    
      const txt = stick.querySelector('.divText').innerText;
      const x =  stick.style.left;
      const y =  stick.style.top;

      const obj = {
          txt: txt,
          x: x,
          y: y
        }
        listaSticks.push(obj); 
    }
  
    const stickJSON = JSON.stringify(listaSticks); //Transforma a array em uma string
    localStorage.setItem('sticks', stickJSON); //Guarda a string na memoria do navegador
  }
  
  function addStickSalvos() {
      if (localStorage.sticks) {
        const stick = localStorage.getItem('sticks'); //Pega os itens da memoria
        const listaSticks = JSON.parse(stick); //Converte novamente para array
         
        listaSticks.forEach((e)=> {
            const x = e.x;
            const y = e.y;
            const txt = e.txt;
            criaStick(x, y, txt) 
        })
         
      }
      
     
      delStick()
      salvarSticks();
    
  }
 

  document.addEventListener('keypress', ()=> {
    salvarSticks();

  });

  criaNota()
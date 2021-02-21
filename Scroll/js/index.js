const anima = document.querySelectorAll('.anima');
const box = document.querySelectorAll('.box')

callScroll()
document.addEventListener('scroll', callScroll)

function callScroll() {
    box.forEach(e => {
        let rect = e.getBoundingClientRect();

        if(rect.top < window.innerHeight) {
            e.classList.add('ativo');
        } else {
            e.classList.remove('ativo') 

        }
  
    });
}

const loader = document.querySelector('.loader');
const img = document.querySelector('.img');
const counter = document.querySelector('.counter');


function load(counter) {
    let num = 1;
    let down = 30;
    let downOp = 100;
    const timer = setInterval(() => {
        counter.innerText = `${num}%`;
        blurDown(down);
        num ++;
        down -= 0.3;
        downOp --;
        if(num > 100) {
            clearInterval(timer);
            downOp = 0;
        }
        opacityDown(downOp)
        
    }, 20);

}

function blurDown(down) {
    img.style.filter = `blur(${down}px)`;
}

function opacityDown(downOp) {
    counter.style.opacity = `${downOp}`/100;
    console.log(downOp)
}

load(counter);
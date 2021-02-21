

const lp1 = document.querySelector('.container-lp1');
const lp2 = document.querySelector('.container-lp2');


lp1.addEventListener("mouseover", callSplit1);
lp1.addEventListener("mouseout", callSplitOut1);
lp2.addEventListener("mouseover", callSplit2);
lp2.addEventListener("mouseout", callSplitOut2);

function callSplit1() {
    lp1.classList.add('ativo');
    
}

function callSplitOut1() {
    lp1.classList.remove('ativo');
}

function callSplit2() {
    lp2.classList.add('ativo');
    
}

function callSplitOut2() {
    lp2.classList.remove('ativo');
}
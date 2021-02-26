const counterNum = document.querySelectorAll('.counter__value');



counterNum.forEach((e)=> {
      const valueCount = e.innerText;
      e.innerText = '';
      callCounter(valueCount, e);
})

function callCounter(valueCount, e) {
      let init = 0;

      const increase = setInterval(() => {
            e.innerText = init;
   
            init += 456;

            if(init > valueCount) {
                  clearInterval(increase);
                  e.innerText = valueCount;
                  
            }

      }, 30);


}
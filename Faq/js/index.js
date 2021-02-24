const faqHeader = document.querySelectorAll('.faq-ask');
const faqCollapse = document.querySelectorAll('.faq-collapse');

faqHeader.forEach((faq, ind)=> {

    faq.addEventListener('click', () => {
    callShow(faq, ind);
    
    })
})

function callShow(faq, ind) {
    if (faq.parentElement.parentElement.classList.contains('show')) {
        faq.parentElement.parentElement.classList.remove('show'); 
    } 
    else {
    
        callCollapse(); //Retirar se não quiser apenas um ask aberto por vez.
        faq.parentElement.parentElement.classList.add('show');

    }
  
}

// Para Apenas um ASK aberto por vez

function callCollapse() {
  
    faqHeader.forEach((faq)=> {
        if ((faq.parentElement.parentElement.classList.contains('show'))) {
            faq.parentElement.parentElement.classList.remove('show')
            

      } 
    
    })
     
 }
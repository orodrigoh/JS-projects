class Steps {
    constructor() {
        this.steps = document.querySelectorAll('.steps');
        this.next = document.querySelector('#next');
        this.prev = document.querySelector('#prev');
        this.next.disabled = false;

        this.nextBtn()
        this.prevBtn()
    }
    
    nextBtn() {
        this.next.addEventListener('click', () => {
            this.callNext()
            this.callProgress()
            this.callEnabled()
        })
    }

  
   prevBtn() {
        this.prev.addEventListener('click', () => {
            this.callPrev()
            this.callProgress()
            this.callEnabled()

        })
    }
    callNext() {
        const noActive = document.querySelectorAll('.steps:not(.ativo)');
        noActive[0].classList.add('ativo');
 
     }

     callPrev() {
        const active = document.querySelectorAll('.ativo');
        active[active.length-1].classList.remove('ativo');
        
     }

     callEnabled() {
        const active = document.querySelectorAll('.ativo'); 

        if(active.length === this.steps.length) {
            this.prev.disabled = false;
            this.next.disabled = true;
           
        } else if(active.length > 1) {
            this.prev.disabled = false;
        } else if(active.length === 1) {
            this.prev.disabled = true;
            this.next.disabled = false;

            
        }
     }
    
    callProgress() {
    const progress = document.querySelector('.progress');
    const containerWidth = getComputedStyle(document.querySelector('.container-steps')).width;
    const stepsTotal = this.steps.length-1;
    const ativo = document.querySelectorAll('.ativo').length-1;    
    let progressTotal =+ (containerWidth.slice(0,-2) / stepsTotal)*ativo;
    progress.style.width = progressTotal +'px'
    }

}






const steps = new Steps();

// console.log(steps.noActive[0])
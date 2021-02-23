
const label = document.querySelectorAll('.form-box label');

    label.forEach((e)=> {
          e.innerHTML = e.innerText
          .split('')
          .map((lt,ind) => `<span style="transition-delay: ${ind*50}ms">${lt}</span>`)
          .join('')
    })

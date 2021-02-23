const opt = {
      mehod: 'GET',
      headers: {
            "Accept" : "application/json" 
      }
}
const btn = document.querySelector('.btn')
const jokeDiv = document.querySelector('.joke')

getJoke()

btn.addEventListener('click', () => {
      getJoke()
       
})

function getJoke() {
      fetch('https://icanhazdadjoke.com/', opt)
      .then((response)=> {
            return response.json();
      }).then((joke)=> {
            jokeDiv.innerHTML = joke.joke
      })
}
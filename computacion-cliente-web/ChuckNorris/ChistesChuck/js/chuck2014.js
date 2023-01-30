document.getElementById("PedirBroma").addEventListener("click", requestJoke);
let textoBroma = document.getElementById("textoBroma");

function requestJoke() {
  function callChuckNorrisJoke(index) {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);
        let joke = data.value;
        textoBroma.insertAdjacentHTML(
          "beforeend",
          `<p><span class='jokeNumber'>Broma #${index}</span><br>${joke}</p> <br>`
        );
      });
  }

  for (let index = 0; index < 10; index++) {
    callChuckNorrisJoke(index);
  }
}

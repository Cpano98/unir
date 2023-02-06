document.getElementById("PedirBroma").addEventListener("click", requestJoke);
let textoBroma = document.getElementById("textoBroma");

function requestJoke() {
  $.get("https://api.chucknorris.io/jokes/random", (response) => {
    var textoChiste = response.value;
    console.log(textoChiste);
    $("#textoBroma").html(textoChiste);
  });
}

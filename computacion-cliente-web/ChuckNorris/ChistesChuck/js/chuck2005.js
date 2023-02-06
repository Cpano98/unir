document.getElementById("PedirBroma").addEventListener("click", requestJoke);
let textoBroma = document.getElementById("textoBroma");

function requestJoke() {
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);

  xmlhttp.onreadystatechange = function () {
    let textoChiste = JSON.parse(this.response).value;
    console.log("Chiste recibido: " + textoChiste);

    textoBroma.innerHTML = textoChiste;
  };
  xmlhttp.send();
}

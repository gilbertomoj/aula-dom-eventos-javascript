// var elemento = document.getElementById("tituloMusica")
// elemento.innerHTML = "O cravo e a rosa"

var elementos = document.getElementsByTagName('p');

for(let i = 0; i < elementos.length; i ++){
    elementos[i].innerHTML = `Olá mundo JS! Tag de número ${i+1}`
}
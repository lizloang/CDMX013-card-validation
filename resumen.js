const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get("fname");
const pais = urlParams.get("fcountry");

document.getElementById("usuario").innerText = nombre;
document.getElementById("usuario").style.color = "black";

document.getElementById("pais").innerText = pais;
document.getElementById("pais").style.color = "black";

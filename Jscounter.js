let suma = document.querySelector("#buttonid1")
let resta = document.querySelector("#buttonid2") 
let reiniciar = document.querySelector("#buttonid3") 
let resultado = document.querySelector("#resultado") 
let contador = 0 


function incluir(e) {
    contador++;
    resultado.textContent = contador;
}
function restar(e) {
    contador--;
    resultado.textContent = contador;
}
function restart(e) {
    contador = 0;
    resultado.textContent = contador;
}
suma.addEventListener("click", incluir)
resta.addEventListener("click", restar)
reiniciar.addEventListener("click", restart)
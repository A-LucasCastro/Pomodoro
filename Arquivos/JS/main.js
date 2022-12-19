const pomodoro = document.querySelector(".pomodoro");
const intervaloCurto = document.querySelector(".intervaloCurto");
const intervaloGrande = document.querySelector(".intervaloGrande");

const timer = document.querySelector(".timer");
let minutos = 25;
let segundos = 0;

timer.innerHTML = `${minutos}:${zeroAEsquerda(segundos)}`;

function zeroAEsquerda(num) {
  return num < 10 ? `0${num}` : num;
}

function contador() {
    if (minutos >= 0 || segundos >= 0) {
        if (segundos == 0) {
            segundos = 59;
            minutos--;
        } else {
            segundos--
        }
        timer.innerHTML = `${minutos}:${zeroAEsquerda(segundos)}`;				
			setTimeout(contador(), 1000);	
    }
}

function comecarPomodoro() {
  contador()
}

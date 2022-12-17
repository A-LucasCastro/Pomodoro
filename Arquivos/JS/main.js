const pomodoro = document.querySelector('.pomodoro')
const intervaloCurto = document.querySelector('.intervaloCurto')
const intervaloGrande = document.querySelector('.intervaloGrande')

const timer = document.querySelector('.timer')
let minutos = 25
let segundos = 00

timer.innerHTML = `${minutos}:${segundos}`

function comecarPomodoro() {
    setInterval(function() {
        segundos -= segundos
    }, 1000)
}
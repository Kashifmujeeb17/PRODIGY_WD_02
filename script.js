let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let lapBtn = document.querySelector('.btn-lap'); // Corrected from getElementById
let lapsList = document.getElementById('laps');
let interval;

let lapCounter = 1;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    lapsList.innerHTML = ''; // Reset laps list
    lapCounter = 1; // Reset lap counter
})

lapBtn.addEventListener('click', () => {
    let lapTime = `${padTime(mins)}:${padTime(seconds)}:${padTime(tens)}`;
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
    lapsList.appendChild(lapItem);
})

function padTime(time) {
    return time < 10 ? `0${time}` : time;
}


function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
    }
    getTens.innerHTML = (tens < 10 ? '0' : '') + tens;
    getSeconds.innerHTML = (seconds < 10 ? '0' : '') + seconds;
    getMins.innerHTML = (mins < 10 ? '0' : '') + mins;
}

const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const minutesBreak = document.querySelector('.minutes-break');
const secondsBreak = document.querySelector('.seconds-break');
const descanso = document.querySelector('.descanso');
const playTimer = document.querySelector('.playTimer');
const minutesDefault = 25;
let currentMinutes; let currentSeconds; let currentMinutesBreak; let currentSecondsBreak; let intervalMinutes; let intervalSeconds; let
  minutesFocus;
// STARTING CONDITIONS
function startingConditionsFocus() {
  currentMinutes = 3;
  currentSeconds = 3;
  minutes.innerHTML = currentMinutes;
  seconds.innerHTML = currentSeconds;
}
function startingConditionsBreak() {
  currentMinutesBreak = 5;
  currentSecondsBreak = 5;
  minutesBreak.innerHTML = currentMinutesBreak;
  secondsBreak.innerHTML = currentSecondsBreak;
}
startingConditionsFocus();
startingConditionsBreak();

// START TIMER
// setInterval execute a function every certain interval
playTimer.addEventListener('click', () => {
  intervalMinutes = setInterval(minutesTimer, 3000); // Reemplazar este valor por minutesDefault*1000 cuando este terminada la app
  intervalSeconds = setInterval(secondsTimer, 1000);
});

// This function execute it every 60'', substract 1 minute and print it
function minutesTimer() {
  currentMinutes -= 1;
  minutes.innerHTML = currentMinutes;
  console.log(currentMinutes);
}
// This function execute it every second, substract 1 sec and verify if the countwdown reach 0
function secondsTimer() {
  currentSeconds -= 1;
  seconds.innerHTML = currentSeconds;
  console.log(currentSeconds);

  if (currentSeconds === 0) {
    if (currentMinutes === 0) {
      clearInterval(intervalSeconds);
      clearInterval(intervalMinutes);
      startingConditions();
    }
    currentSeconds = 3;
  }
}

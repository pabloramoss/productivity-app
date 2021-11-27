// VARIABLES DECLARATIONS
const minutesFocus = document.querySelector('.minutes');
const secondsFocus = document.querySelector('.seconds');
const minutesBreak = document.querySelector('.minutes-break');
const secondsBreak = document.querySelector('.seconds-break');
const playFocus = document.querySelector('.playTimer');
const reset = document.querySelector('.reset');
const timeoutSound = document.getElementById('timeout');
let currentMinutesFocus; let currentSecondsFocus; let currentMinutesBreak; let
  currentSecondsBreak;
let intervalMinutesFocus; let intervalSecondsFocus; let intervalMinutesBreak; let
  intervalSecondsBreak;

// STARTING CONDITIONS START
function startingConditionsFocus() {
  currentMinutesFocus = 24;
  currentSecondsFocus = 59; // This value have to be 59'' at the beginning;
  minutesFocus.innerHTML = currentMinutesFocus;
  secondsFocus.innerHTML = currentSecondsFocus;
}
function startingConditionsBreak() {
  currentMinutesBreak = 4;
  currentSecondsBreak = 59;
  minutesBreak.innerHTML = currentMinutesBreak;
  secondsBreak.innerHTML = currentSecondsBreak;
}
startingConditionsFocus();
startingConditionsBreak();
// STARTING CONDITIONS END

// BREAK SECTION
function secondsTimerBreak() {
  currentSecondsBreak -= 1;
  // Adding 0 for numbers < 10
  function addZeroBreak() {
    if (currentSecondsBreak < 10) {
      secondsBreak.innerHTML = `0${currentSecondsBreak}`;
    } else {
      secondsBreak.innerHTML = currentSecondsBreak;
    }
  }
  addZeroBreak();

  if (currentSecondsBreak === 0) {
    if (currentMinutesBreak === 0) {
      clearInterval(intervalSecondsBreak);
      clearInterval(intervalMinutesBreak);
      startingConditionsBreak();
      document.querySelector('.focus').classList.add('active');
      document.querySelector('.sleep').classList.remove('active');

      timeoutSound.play();
    }
    currentSecondsBreak = 60; // Reset the second countdown
  }
}
function minutesTimerBreak() {
  currentMinutesBreak -= 1;
  minutesBreak.innerHTML = currentMinutesBreak;
}

// FOCUS SECTION
// This function execute it every second, substract 1 sec and verify if the countwdown reach 0
function secondsTimerFocus() {
  currentSecondsFocus -= 1;
  // Adding 0 for numbers < 10
  function addZeroFocus() {
    if (currentSecondsFocus < 10) {
      secondsFocus.innerHTML = `0${currentSecondsFocus}`;
    } else {
      secondsFocus.innerHTML = currentSecondsFocus;
    }
  }
  addZeroFocus();

  if (currentSecondsFocus === 0) {
    if (currentMinutesFocus === 0) {
      clearInterval(intervalSecondsFocus);
      clearInterval(intervalMinutesFocus);
      startingConditionsFocus();
      timeoutSound.play();
      document.querySelector('.focus').classList.remove('active');
      document.querySelector('.sleep').classList.add('active');

      // Start break time
      intervalMinutesBreak = setInterval(minutesTimerBreak, 60000); // Reemplazar luego por 60000
      intervalSecondsBreak = setInterval(secondsTimerBreak, 1000);
    }
    currentSecondsFocus = 60; // Reset the second countdown
  }
}

// This function execute it every 60'', substract 1 minute and print it
function minutesTimerFocus() {
  currentMinutesFocus -= 1;
  minutesFocus.innerHTML = currentMinutesFocus;
}

// Start focus timer
// setInterval execute a function every certain interval
playFocus.addEventListener('click', () => {
  document.querySelector('.focus').classList.add('active');
  intervalMinutesFocus = setInterval(minutesTimerFocus, 60000); // Reemplazar luego por 60000
  intervalSecondsFocus = setInterval(secondsTimerFocus, 1000);
});

// RESET BUTTON
reset.addEventListener('click', () => {
  startingConditionsFocus();
  startingConditionsBreak();
  clearInterval(intervalSecondsBreak);
  clearInterval(intervalMinutesBreak);
  clearInterval(intervalSecondsFocus);
  clearInterval(intervalMinutesFocus);
  document.querySelector('.sleep').classList.remove('active');
  document.querySelector('.focus').classList.remove('active');
});

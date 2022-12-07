const timerElement = document.querySelector(".timer");
let hh = 0;
let mm = 0;
let ss = 0;
let isRunning = true;

let timerInterval = setInterval(() => updateClock(), 1000);

const toggleTimerBtn = document.querySelector(".toggle-timer");
const resetTimerBtn = document.querySelector(".reset-timer");

toggleTimerBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    toggleTimerBtn.textContent = "Play";
  } else {
    playTimer();
    toggleTimerBtn.textContent = "Stop";
  }
});

resetTimerBtn.addEventListener("click", () => {
  resetTimer();
});

/******************************************** Utility functions *******************************************/

function updateClock() {
  if (ss > 59) {
    mm++;
    ss = 0;
  } else if (mm > 59) {
    hh++;
    mm = 0;
  }

  ss++;

  timerElement.textContent = createClock();
}

function createClock() {
  const adjustedHH = hh < 10 ? `0${hh}` : hh;
  const adjustedMM = mm < 10 ? `0${mm}` : mm;
  const adjustedSS = ss < 10 ? `0${ss}` : ss;

  return `${adjustedHH}:${adjustedMM}:${adjustedSS}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function playTimer() {
  timerInterval = setInterval(() => updateClock(), 1000);
  isRunning = true;
}

function resetTimer() {
  hh = 0;
  mm = 0;
  ss = 0;

  timerElement.textContent = createClock();
}

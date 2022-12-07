const clockEl = document.querySelector(".clock");
let hh = 0;
let mm = 0;
let ss = 0;

setInterval(() => updateClock(), 1000);

function updateClock() {
  if (ss > 59) {
    mm++;
    ss = 0;
  } else if (mm > 59) {
    hh++;
    mm = 0;
  }

  ss++;

  const adjustedHH = hh < 10 ? `0${hh}` : hh;
  const adjustedMM = mm < 10 ? `0${mm}` : mm;
  const adjustedSS = ss < 10 ? `0${ss}` : ss;

  clockEl.textContent = `${adjustedHH}:${adjustedMM}:${adjustedSS}`;
}

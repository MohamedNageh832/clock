const clockEl = document.querySelector(".clock");

setInterval(() => updateClock(), 1000);

function updateClock() {
  clockEl.textContent = createClock();
}

function createClock() {
  const date = new Date();

  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const adjustedHH = hh < 10 ? `0${hh}` : hh;
  const adjustedMM = mm < 10 ? `0${mm}` : mm;
  const adjustedSS = ss < 10 ? `0${ss}` : ss;

  return `${adjustedHH}:${adjustedMM}:${adjustedSS}`;
}

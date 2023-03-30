let countdown;
let timerDisplay = document.getElementById('time-left');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function startPomodoro() {
  resetTimer();
  timer(1500);
}

function startShortBreak() {
  resetTimer();
  timer(300);
}

function startLongBreak() {
  resetTimer();
  timer(900);
}

function resetTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = '25:00';
}

document.getElementById('start-pomodoro').addEventListener('click', startPomodoro);

document.getElementById('start-short-break').addEventListener('click', startShortBreak);

document.getElementById('start-long-break').addEventListener('click', startLongBreak);

document.getElementById('reset-timer').addEventListener('click', resetTimer);


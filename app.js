let timeLeft = 0;
let timerId;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  timerId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
          clearInterval(timerId);
          alert("Time's up!");
      }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function startPomodoro() {
  timeLeft = 25 * 60; // 25 minutes in seconds
  let display = document.querySelector('#time-left');
  startTimer(timeLeft, display);
}

function startBreak() {
  timeLeft = 5 * 60; // 5 minutes in seconds
  let display = document.querySelector('#time-left');
  startTimer(timeLeft, display);
}

function startLongBreak() {
  timeLeft = 15 * 60; // 15 minutes in seconds
  let display = document.querySelector('#time-left');
  startTimer(timeLeft, display);
}

function resetTimer() {
  stopTimer();
  let display = document.querySelector('#time-left');
  display.textContent = "25:00";
}

document.querySelector('#start-pomodoro').addEventListener('click', startPomodoro);
document.querySelector('#start-short-break').addEventListener('click', startBreak);
document.querySelector('#start-long-break').addEventListener('click', startLongBreak);
document.querySelector('#reset-timer').addEventListener('click', resetTimer);

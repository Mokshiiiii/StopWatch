const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const reset = document.querySelector("#reset");
const timerDisplay = document.querySelector("#timerDisplay");

let msec = 0;
let sec = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  timerId = setInterval(startTimer, 10);
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      mins++;
    }
  }
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minsString = mins < 10 ? `0${mins}` : mins;
  timerDisplay.textContent = `${minsString}:${secString}:${msecString}`;
}

const captureBtn = document.querySelector("#captureBtn");
const statusMsg = document.querySelector("#statusMsg");
const timeList = document.querySelector("#timeList");

captureBtn.addEventListener("click", () => {
  let msecString = msec < 10 ? `0${msec}` : `${msec}`;
  let secString = sec < 10 ? `0${sec}` : `${sec}`;
  let minsString = mins < 10 ? `0${mins}` : `${mins}`;

  let li = document.createElement("li");
  li.textContent = `${minsString}:${secString}:${msecString}`;
  timeList.appendChild(li);

  if( li.textContent == 0 ){
    statusMsg.textContent = "Start the stopwatch to capture time";
    return;
  }
    statusMsg.textContent = "";
});

stopBtn.addEventListener("click", () => {
  if (timerId == null) return;
  clearInterval(timerId);
  timerId = null;
});

reset.addEventListener("click", () => {
  clearInterval(timerId);
  msec = 0;
  sec = 0;
  mins = 0;

  timerDisplay.textContent = `00:00:00`;
});

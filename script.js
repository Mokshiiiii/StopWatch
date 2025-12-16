const timerDisplay = document.querySelector("#timerDisplay")
const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn");
const reset = document.querySelector("#reset")

let msec = 0;
let sec = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener("click", () => {
    if (timerId !== null) return;

    timerId = setInterval(startTimer, 10)
});

const timeList = document.querySelector("#timeList");

stopBtn.addEventListener("click", () => {
  if (timerId === null) return;

  clearInterval(timerId);
  timerId = null;

  const msecString = msec < 10 ? `0${msec}` : `${msec}`;
  const secString = sec < 10 ? `0${sec}` : `${sec}`;
  const minsString = mins < 10 ? `0${mins}` : `${mins}`;

  const li = document.createElement("li");
  li.textContent = `${minsString}:${secString}:${msecString}`;

  timeList.appendChild(li);
});

reset.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null
    msec = 0;
    sec = 0;
    mins = 0;

    timerDisplay.textContent = `00:00:00`
})

function startTimer() {
    msec++
    if (msec == 100) {
        msec = 0
        sec++;
        if (sec == 60) {
            sec = 0;
            mins++
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timerDisplay.innerHTML= `${minsString}:${secString}:${msecString}`;


}
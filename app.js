// Elements
const startBtn = document.getElementById("start");
const stoptBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

const breakBtn = document.getElementById("break");

// Initialize variables for interval and remaining time
let interval;
let timeLeft = 1500; // 25 minutes in seconds
let isBreak = false;

// update the timer display
function updateTimer() {
  // Calculate minutes and seconds from remaining time
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Format the time as minutes : seconds
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime; // Update the timer display
}

function startTimer() {
  // Set up an interval to decrease remaining time every second
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      //reset to work time again
      timeLeft = 1500;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

// reset the timer to the initial value
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startBtn.addEventListener("click", startTimer);
stoptBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

breakBtn.addEventListener("click", () => {
  timeLeft = 300; // 5 minutes for break
  isBreak = true;
  startTimer();
});

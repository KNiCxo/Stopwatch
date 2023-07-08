// Digit elements for stopwatch
const digitOne = document.querySelector('.js-milliseconds-one');
const digitTwo = document.querySelector('.js-milliseconds-two');
const digitThree = document.querySelector('.js-second-one');
const digitFour = document.querySelector('.js-second-two');
const digitFive = document.querySelector('.js-minute-one');
const digitSix = document.querySelector('.js-minute-two');
const additionalClock = document.querySelector('.js-additional-clock');

// Button elemenents for stopwatch
const startButtonElement = document.querySelector('.js-start-button');
const resetButtonElement = document.querySelector('.js-reset-button');

// Used to check if stopwatch is running
let isOn = false;

// Keeps ID of setInterval function for clearing
let intervalID;

// Stores total time elapsed for when stopwatch is paused
let timeBank = 0;

// Stores time elapsed while stopwatch is running
let timeElapsed = 0;

const stopwatch = () => {
  // Get current time to compare between each interval
  let startTime = Date.now();

 // If stopwatch is not running, make the start button say 'Stop' and begin the stopwatch function
  if (!isOn) {
    isOn = true;
    startButtonElement.innerHTML = 'Stop';

    // Gets time elapsed every 1ms and converts to clock format
    intervalID = setInterval(() => {
      timeElapsed = Date.now() - startTime;

      // Divides time elapsed by measurement of time and uses modulo to maintain
      // a single digit per element. Used floor to remove decimal.
      digitOne.innerHTML = Math.floor((timeBank + timeElapsed) / 10) % 10; // 10ms
      digitTwo.innerHTML = Math.floor((timeBank + timeElapsed) / 100) % 10; // 100ms
      digitThree.innerHTML = Math.floor((timeBank + timeElapsed) / 1000) % 10; // 1 second
      digitFour.innerHTML = Math.floor((timeBank + timeElapsed) / 10000) % 6; // 10 seconds
      digitFive.innerHTML = Math.floor((timeBank + timeElapsed) / 60000) % 10; // 1 minute
      digitSix.innerHTML = Math.floor((timeBank + timeElapsed) / 600000) % 6; // 10 minutes

      // If time has elapsed to an hour, adds additionals clock element
      if (timeElapsed > 3600000) {
        additionalClock.innerHTML = `
          <span>${Math.floor((timeBank + timeElapsed) / 3600000)}</span>
          <span>:</span> 
        `;
      }
    }, 1);
  } else {
    // Else, stops stopwatch and stores time elapsed in timeBank
    stop();
    timeBank += timeElapsed;
  }
}

const reset = () => {
  // Stops stopwatch if running, sets timeBank to 0, and clears clock HTML
  stop();
  timeBank = 0;

  digitOne.innerHTML = 0;
  digitTwo.innerHTML = 0;
  digitThree.innerHTML = 0;
  digitFour.innerHTML = 0;
  digitFive.innerHTML = 0;
  digitSix.innerHTML = 0;
  additionalClock.innerHTML = ''
}

function stop() {
  // Stops stopwatch and changes stop button to 'Start'
  isOn = false;
  clearInterval(intervalID);
  startButtonElement.innerHTML = 'Start';
}

// Clicking the start/stop button will run/stop the stopwatch function
startButtonElement.addEventListener('click', stopwatch);

// Clicking the reset button will stop the stopwatch and clear the clock
resetButtonElement.addEventListener('click', reset);
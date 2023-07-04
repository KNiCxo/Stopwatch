// Digit elements for stopwatch
const digitOne = document.querySelector('.js-milliseconds-one');
const digitTwo = document.querySelector('.js-milliseconds-two');
const digitThree = document.querySelector('.js-second-one');
const digitFour = document.querySelector('.js-second-two');
const digitFive = document.querySelector('.js-minute-one');
const digitSix = document.querySelector('.js-minute-two');

// Button elemenents for stopwatch
const startButtonElement = document.querySelector('.js-start-button');
const stopButtonElement = document.querySelector('.js-stop-button');

// Stopwatch function
const stopwatch = () => {
  // Get current time to compare between each interval
  let startTime = Date.now();
  let timeElapsed;

  // Gets time elapsed every 1ms and converts to clock format
  setInterval(() => {
    timeElapsed = Date.now() - startTime;

    // Divides time elapsed by measurement of time and uses modulo to maintain
    // a single digit per element. Used floor to remove decimal.
    digitOne.innerHTML = Math.floor(timeElapsed / 10) % 10; // 10ms
    digitTwo.innerHTML = Math.floor(timeElapsed / 100) % 10; // 100ms
    digitThree.innerHTML = Math.floor(timeElapsed / 1000) % 10; // 1 second
    digitFour.innerHTML = Math.floor(timeElapsed / 10000) % 6; // 10 seconds
    digitFive.innerHTML = Math.floor(timeElapsed / 60000) % 10; // 1 minute
    digitSix.innerHTML = Math.floor(timeElapsed / 600000) % 6; // 10 minutes
  }, 1);
}

// Clicking the start button will run the stopwatch function
startButtonElement.addEventListener('click', stopwatch);

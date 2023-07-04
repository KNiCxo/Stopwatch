const digitOne = document.querySelector('.js-milliseconds-one');
const digitTwo = document.querySelector('.js-milliseconds-two');
const digitThree = document.querySelector('.js-second-one');
const digitFour = document.querySelector('.js-second-two');
const digitFive = document.querySelector('.js-minute-one');
const digitSix = document.querySelector('.js-minute-two');

const startButtonElement = document.querySelector('.js-start-button');
const stopButtonElement = document.querySelector('.js-stop-button');

const centisecond = 10;

let millisecondsOne = 0;
let millisecondsTwo = 0;
let secondsOne = 0;
let secondsTwo = 0;

const stopwatch = () => {
  let startTime = Date.now();
  let timeElapsed;

  setInterval(() => {
    timeElapsed = Date.now() - startTime;
    digitOne.innerHTML = Math.floor(timeElapsed / 10) % 10;
    digitTwo.innerHTML = Math.floor(timeElapsed / 100) % 10;
    digitThree.innerHTML = Math.floor(timeElapsed / 1000) % 10;
    digitFour.innerHTML = Math.floor(timeElapsed / 10000) % 6;
    digitFive.innerHTML = Math.floor(timeElapsed / 60000) % 10;
    digitSix.innerHTML = Math.floor(timeElapsed / 600000) % 6;
  }, 1);
}
startButtonElement.addEventListener('click', stopwatch);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

const backgroundColorChange = {
  intervalId: null,
  isActive: false,
  start() {
    if(this.isActive){
      return btnStartEl.setAttribute('disabled', true);
    }
    this.isActive = true;
    btnStartEl.setAttribute('disabled', true);
    this.intervalId = setInterval(() => {
      const color = getRandomHexColor();
      bodyEl.style.backgroundColor = color;
    }, 1000);
return  btnStopEl.removeAttribute('disabled', true);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    btnStartEl.removeAttribute('disabled', true);
    btnStopEl.setAttribute('disabled', true);
  },
};

btnStartEl.addEventListener("click", () => {
  backgroundColorChange.start();
});
btnStopEl.addEventListener("click", () => {
  backgroundColorChange.stop();
});
import Notiflix from 'notiflix';

// // посилання
const form = document.querySelector('.form');

// промисификация функції
function createPromise(position, delay, delayStep) {
  const shouldResolve = Math.random() > 0.3;

 delay = delay + (position - 1) * delayStep;

  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay});
      } else {
        // Reject
        reject({ position, delay });
      }
  });
};

// дилегування події
form.addEventListener('submit', e => {
  e.preventDefault();
// отримуемо посилання на імпути
  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;
// отримуемо значення імпутів
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);
  
    let position = 1;
    let interval;
    // кількість визову функції
    interval = setInterval(() => {
  createPromise(position, delay, step)
  .then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
if  (++position > amount ) {
  clearInterval(interval);
form.reset();
}
    }, step);
});


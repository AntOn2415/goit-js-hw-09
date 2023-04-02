import Notiflix from 'notiflix';

// посилання
const form = document.querySelector('.form');

// промисификация функції
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
  })
}

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
    // перша затримка
    setTimeout(() =>{
    // кількість визову функції
    let interval = setInterval(() => {
  createPromise(position, delay).then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
if  ((position += 1) > amount) {
  clearInterval(interval);
}
    }, step);
  }, delay);  
});

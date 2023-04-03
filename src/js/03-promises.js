
import Notiflix from 'notiflix';

// // посилання
const form = document.querySelector('.form');

// промисификация функції
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;


  return new Promise((resolve, reject) => {
    setTimeout (() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay});
      } else {
        // Reject
        reject({ position, delay });
      }
    });
  });
};

 form.addEventListener('submit', onFormSubmit);

// дилегування події
function onFormSubmit(e) {
  e.preventDefault();
// отримуемо посилання на імпути
// отримуемо значення імпутів
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);


    // кількість визову функції
   for (let position = 1; position < amount; position++) {
    createPromise(position, delay, step)
  .then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
delay += step;


};
form.reset();
}
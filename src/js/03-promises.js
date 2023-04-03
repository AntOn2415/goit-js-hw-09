import Notiflix from 'notiflix';
// посилання
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

// делегування події
function onFormSubmit(e) {
  e.preventDefault();
  // отримуємо посилання на імпути
  // отримуємо значення імпутів
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

// промисифікація функції
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

  // кількість виклику функції
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        
      });
    delay += step;
  }
  form.reset();
    }


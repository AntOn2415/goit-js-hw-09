import Notiflix from 'notiflix';

// при цій події викликати функцію createPromise та повязати з name="delay", name="step", name="amount" 
const form = document.querySelector('.form');
const inputDelaytEl = document.querySelector( ".form input[name=delay]");
const inputSteptEl = document.querySelector( ".form input[name=step]");
const inputAmountEl = document.querySelector( ".form input[name=amount]");
const btnEl = document.querySelector(".form button");


// form.addEventListener('submit', createPromise);

btnEl.addEventListener('click', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
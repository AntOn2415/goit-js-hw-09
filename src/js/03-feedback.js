import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaImput, 500));

populateForm();

function onFormSubmit (e) {
  // зберігае дані після перезавантаження сторінки
e.preventDefault();
console.log(formData);
// оновлюе форму
e.currentTarget.reset();
// видаляе значення після оновлення форми у localStorage
localStorage.removeItem(STORAGE_KEY);
};

function onTextareaImput (e) {
  const message = e.target.value;
formData.message = message;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
// делегування події
refs.form.addEventListener('input', e => {
  formData['email'] = refs.input.value;
  formData['message'] = refs.textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (savedData) {
    formData['email'] = savedData.email;
    formData['message'] = savedData.message;
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  }
  }


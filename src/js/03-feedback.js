import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

const formData = {};

const localStoregKey = "feedback-form-state";



formRef.addEventListener('input', throttle (addToLocalStorage, 500));
formRef.addEventListener('submit', onSubmit)
addInput()

function addToLocalStorage(evt) {
  formData[evt.target.name] = evt.target.value
 const obj = localStorage.setItem(localStoregKey, JSON.stringify(formData))
}

function onSubmit(evt) {
  evt.preventDefault();
  if (localStorage.getItem(localStoregKey)) {
    console.log(JSON.parse(localStorage.getItem(localStoregKey)))
  }
  evt.currentTarget.reset();
  localStorage.removeItem(localStoregKey);
}

function addInput() {
  const saveData = localStorage.getItem(localStoregKey);
  const parseData = JSON.parse(saveData);

  if (parseData) {
    inputRef.value = parseData.email || '';
    textareaRef.value = parseData.message || '';
  }
}

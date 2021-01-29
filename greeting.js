const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  toDoInputForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser", //   localstorage key
  SHOWING_CN = "showing";

function saveName(text) {
  toDoInputForm.style.display = "block";
  localStorage.setItem(USER_LS, text);
}

function handleClick(event) {
  console.log(nameInput);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  console.log(toDoInputForm);
  nameForm.addEventListener("click", handleClick);
  nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // user is not
    askForName();
    toDoInputForm.style.display = "none";
  } else {
    // user is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

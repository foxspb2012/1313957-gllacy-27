/* секция объявления переменных */ 
var link = document.querySelector(".feedback_form_button");
var dialog = document.querySelector(".modal_dialog");
var popup = document.querySelector(".modal_feedback");
var close = popup.querySelector(".modal_close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=first_last_name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=text_message]");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

/* секция событий */
/* открытие модального окна*/ 
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show_modal");
  dialog.classList.add("visible");

  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
  }
});

/* закрытие модального окна */
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show_modal");
  dialog.classList.remove("visible");
  popup.classList.remove("error_modal");
});

/* отправка формы */
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("error_modal");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error_modal");
  }
  else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
});

/* нажатие клавиши Esc */
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("show_modal")) {
    popup.classList.remove("show_modal");
    popup.classList.remove("error_modal");
    dialog.classList.remove("visible");
  }
}
});

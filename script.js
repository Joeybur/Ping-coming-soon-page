const email = document.getElementById("email");
const notifyBtn = document.getElementById("btn");
const errorMsg = document.querySelector(".error-msg");
const form = document.querySelector("form");
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

notifyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!emailPattern.test(email)) {
    email.style.border = "1px solid red";
    errorMsg.style.display = "block";
  }
});

form.addEventListener("keydown", () => {
  email.style.border = "1px solid hsl(223, 100%, 88%)";
  errorMsg.style.display = "none";
});

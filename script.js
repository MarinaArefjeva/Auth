const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const registerLink = document.querySelector(".Login-link");
const loginSection = document.querySelector(".login-section");

registerLink.addEventListener("click", () => {
  loginSection.classList.add("active");
});

loginLink.addEventListener("click", () => {
  loginSection.classList.remove("active");
});

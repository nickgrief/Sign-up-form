//  Make sure passwords match
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm-password");

confirm.addEventListener("input", (e) => {
  if (e.target.value != password.value) {
    showMatchWarning();
  } else {
    hideMatchWarning();
  }
});
password.addEventListener("input", (e) => {
  if (e.target.value != confirm.value) {
    showMatchWarning();
  } else {
    hideMatchWarning();
  }
});

function showMatchWarning() {
  if (document.querySelector(".warning") == null) {
    let waring = document.createElement("p");
    waring.classList.add("warning");
    waring.textContent = "* Passwords do not match";
    password.parentElement.appendChild(waring);
    password.classList.toggle("not-matching");
    confirm.classList.toggle("not-matching");
  }
}

function hideMatchWarning() {
  if (document.querySelector(".warning") != null) {
    document.querySelector(".warning").remove();
    password.classList.toggle("not-matching");
    confirm.classList.toggle("not-matching");
  }
}

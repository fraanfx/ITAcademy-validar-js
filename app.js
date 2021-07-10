var loginModal = document.getElementById("loginModal");
let loginModalClose = Array.from(document.getElementsByClassName("hideModal"));
var loginBtnShow = document.getElementById("loginOpen");
let modalTitle = document.getElementById("modalTitle");
let modalBody = document.getElementById("modalBody");
let arrayprueba = ["hola", "hola"];
console.log(loginBtnShow);
console.log(loginModalClose);
console.log(loginModal);

function showModal(title, obj) {
  loginModal.style.display = "block";
  loginModal.style.paddingRight = "17px";
  loginModal.className = "modal fade show";
  modalTitle.innerHTML = title;
  modalBody.innerHTML = obj;
}

loginModalClose.map((button) => {
  button.addEventListener("click", (e) => {
    loginModal.style.display = "none";
    loginModal.className = "modal fade";
  });
});

const formLogin = document.getElementById("loginForm");
const formRegister = document.getElementById("registerForm");

function loginCredentials() {
  var acumErrors = 0;

  formLogin.classList.remove("is-invalid");

  var inputEmail = document.getElementById("inputEmail");
  var inputPassword = document.getElementById("inputPass");

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Es un camp obligatori";
    acumErrors++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Format de email incorrecte";
    acumErrors++;
  }
  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Es un camp obligatori";
    acumErrors++;
  }
  if (acumErrors > 0) {
    return false;
  } else {
    let datos = `Inici de sessió completada amb exit amb el correu <b>${inputEmail.value}</b> i la contraseña <b>${inputPassword.value}</b>.`;
    showModal("Login", datos);
    return true;
  }
}

function registerCredentials() {
  let acumErrorsR = 0;

  formRegister.classList.remove("is-invalid");

  let inputUser = document.getElementById("inputUser");
  let inputProvidence = document.getElementById("inputProvincia");
  let inputMail = document.getElementById("inputMail");
  let createPass = document.getElementById("inputPassword");
  let confirmPass = document.getElementById("inputPasswordConfirm");
  let terms = document.getElementById("checkTerms");

  if (inputUser.value == "") {
    inputUser.classList.add("is-invalid");
    document.getElementById("errorUser").textContent = "Es un camp obligatori";
    acumErrorsR++;
  }

  if (inputProvidence.value == "") {
    inputProvidence.classList.add("is-invalid");
    document.getElementById("errorProvincia").textContent =
      "Es un camp obligatori";
    acumErrorsR++;
  } else {
  }
  if (inputMail.value == "") {
    inputMail.classList.add("is-invalid");
    document.getElementById("errorMail").textContent = "Es un camp obligatori";
    acumErrorsR++;
  } else if (!validar_email(inputMail.value)) {
    inputMail.classList.add("is-invalid");
    document.getElementById("errorMail").textContent = "Email invalid";
    acumErrorsR++;
  }

  if (createPass.value == "") {
    createPass.classList.add("is-invalid");
    document.getElementById("errorPass").textContent = "Es un camp obligatori";
    acumErrorsR++;
  } else if (!validar_pass(createPass.value)) {
    createPass.classList.add("is-invalid");
    document.getElementById("errorPass").textContent =
      "La password no cumpleix les condicions";
    acumErrorsR++;
  }

  if (confirmPass.value == "") {
    confirmPass.classList.add("is-invalid");
    document.getElementById("errorConfirm").textContent =
      "Es un camp obligatori";
    acumErrorsR++;
  } else if (confirmPass.value != createPass.value) {
    confirmPass.classList.add("is-invalid");
    document.getElementById("errorConfirm").textContent =
      "Las passwords no coincideixen";
    acumErrorsR++;
  }
  if (!terms.checked) {
    terms.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Es un camp obligatori";
    acumErrorsR++;
  }

  if (acumErrorsR > 0) {
    return false;
  } else {
    let datos = `<h6>Felicitats! Registre completat amb exit!<h6>

    <p>Les seves dades son les següents</p>
    <br>
    <ul>
        <li>Nom d'usuari: <b>${inputUser.value}</li></b> <br>
        <li>Provincia: <b>${inputProvidence.value}</li></b> <br>
        <li>Correu electrónic: <b>${inputMail.value}</li></b> <br>
        <li>Password: <b>${createPass.value}</li></b> <br>
    </ul>

    `;

    showModal("Registre", datos);
    return true;
  }
}

formLogin.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

formRegister.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}
function validar_pass(pass) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(pass) ? true : false;
}

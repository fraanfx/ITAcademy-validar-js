console.log('hola')
const formLogin = document.getElementById('loginForm');

const formRegister = document.getElementById('registerForm');

function loginCredentials() {
    var acumErrors = 0;
    
    formLogin.classList.remove('is-invalid');

    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPass');

    if(inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Es un camp obligatori";
        acumErrors ++;
    } else if(!validar_email(inputEmail.value)){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Format de email incorrecte";
        acumErrors ++;
    }
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es un camp obligatori";
		acumErrores ++;
    }
    if(acumErrors > 0){
        console.log('no hay modal');
        return false;
    }
    else{
        console.log('hay modal');
        return true;
    }

}

function registerCredentials() {
    let acumErrorsR = 0;

    formRegister.classList.remove('is-invalid');
    
    let inputUser = document.getElementById('inputUser');
    let inputProvidence = document.getElementById('inputProvincia');
    let inputMail = document.getElementById('inputMail');
    let createPass = document.getElementById('inputPassword');
    let confirmPass = document.getElementById('inputPasswordConfirm');
    let terms = document.getElementById('checkTerms');



    if(inputUser.value == "") {
        inputUser.classList.add("is-invalid");
        document.getElementById("errorUser").textContent = "Es un camp obligatori";
        acumErrorsR ++;

    } 

    if(inputProvidence.value == ''){
        inputProvidence.classList.add("is-invalid");
        document.getElementById("errorProvincia").textContent = "Es un camp obligatori";
        acumErrorsR ++;
    }else{

    }
    if(inputMail.value == ''){
        inputMail.classList.add("is-invalid");
        document.getElementById("errorMail").textContent = "Es un camp obligatori";

    } else if(!validar_email(inputMail.value)){
        inputMail.classList.add("is-invalid");
        document.getElementById("errorMail").textContent = "Email invalid";
    }

    if(createPass.value == ''){
        createPass.classList.add("is-invalid");
        document.getElementById("errorPass").textContent = "Es un camp obligatori";

    }
    else if(!validar_pass(createPass.value)){
        createPass.classList.add("is-invalid");
        document.getElementById("errorPass").textContent = "La password no cumpleix les condicions";

    }

    if(confirmPass.value == '') {
        confirmPass.classList.add("is-invalid");
        document.getElementById("errorConfirm").textContent = "Es un camp obligatori";
    }
    else if(confirmPass.value != createPass.value){
        confirmPass.classList.add("is-invalid");
        document.getElementById("errorConfirm").textContent = "Las passwords no coincideixen";
    }
    if(!terms.checked) {
        terms.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Es un camp obligatori";

    }


    if(acumErrorsR > 0){
        console.log('no hay modal');

        return false;
    }
    else{
        console.log('hay modal');

        return true;
    }
}





formLogin.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

formRegister.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
function validar_pass(pass) {
	var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	return regex.test(pass) ? true : false;
}
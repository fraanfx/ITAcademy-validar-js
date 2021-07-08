const formLogin = document.getElementById('loginForm');

const formRegister = document.getElementById('registerForm');

function loginCredentials() {
    var acumErrors = 0;
    
    form.classList.remove('is-invalid');

    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPass');

    if(inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Es un campo obligatorio";
        acumErrors ++;
    } else if(!validar_email(inputEmail.value)){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Formato de email incorrecto";
        acumErrors ++;
    }
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPass").textContent = "Es campo es obligatorio";
		acumErrores ++;
    }
    if(acumErrors > 0){
        return false;
    }
    else{
        return true;
    }

}

function registerCredentials() {
    var acumErrorsR = 0;

    form.classList.remove('is-invalid');
    
    var inputUser = document.getElementById('user');
    var inputProvidence = document.getElementById('provincia')
}





formLogin.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
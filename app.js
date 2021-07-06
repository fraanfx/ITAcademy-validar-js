const formLogin = document.getElementById('loginForm');

const formRegister = document.getElementById('registerForm');

function loginCredentials() {
    var acumErrors = 0;
    
    form.classList.remove('is-invalid');

    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPass');
}

function registerCredentials() {
    var acumErrors = 0;

    form.classList.remove('is-invalid');
    
    var inputUser = document.getElementById('user');
}





form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
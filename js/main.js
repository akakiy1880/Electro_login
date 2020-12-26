const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function check() {
	let login = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	if (login == "" || password == "") {
		alert(`Логин и/или пароль не могут быть пустыми.`);
	}
	else if (password.length < 8) {
		alert(`Пароль не может быть короче 8 символов.`);
	}
	else {
		document.getElementById("login_btn").onclick = function(){
  		document.location.href = "http://t.me/AlexPoluyanov";}
	}
};

document.getElementsByClassName('list_lang')[0].onclick = function() {
	var el = document.getElementsByClassName('list_lang')[0];
	el.style.display = 'none';
	var elem = document.getElementsByClassName('dropdown-child')[0];
	elem.style.display = 'block';
};
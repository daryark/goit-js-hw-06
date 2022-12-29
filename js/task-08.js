//task Напиши скрипт управління формою логіна.
//f.e Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//f.e Під час відправлення форми сторінка не повинна перезавантажуватися.
//f.e Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//f.e Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//f.e Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
	form: document.querySelector(".login-form"),
	// email: document.getElementsByName("email"),
	// password: document.getElementsByName("password"),
};

const submitForm = (event) => {
	event.preventDefault();

	const formEls = event.currentTarget.elements;
	const email = formEls.email.value;
	const password = formEls.password.value;

	if (!email || !password) {
		return alert("All inputs must be filled!");
	}

	const formDataToSave = {
		email,
		password,
	};

	refs.form.reset();
	console.log(formDataToSave);
};

refs.form.addEventListener("submit", submitForm);

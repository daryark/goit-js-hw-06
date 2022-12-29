//task Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//f.e Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// f.e.Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//f.e Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");

const checkQuantityOfSymbols = () => {
	if (inputEl.value.length > inputEl.dataset.length) {
		inputEl.classList.add("valid");

		if (inputEl.classList.contains("invalid")) {
			inputEl.classList.remove("invalid");
		}
		return;
	}

	inputEl.classList.add("invalid");
	if (inputEl.classList.contains("valid")) {
		inputEl.classList.remove("valid");
	}

	// inputEl.classList.add(inputEl.value.length > 6 ? "valid" : "invalid"); //variant without class toggle
};

inputEl.addEventListener("blur", checkQuantityOfSymbols);

//task Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
	input: document.querySelector("input#name-input"),
	span: document.querySelector("span#name-output"),
};

const onInputChange = (event) =>
	(refs.span.textContent =
		event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous");

refs.input.addEventListener("input", onInputChange);

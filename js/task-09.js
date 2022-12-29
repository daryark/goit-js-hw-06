//task Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
//f.e Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function onClickChangeColor() {
	const currentColor = getRandomHexColor();
	bodyEl.style.backgroundColor = currentColor;
	textEl.textContent = currentColor;
}

changeColorBtn.addEventListener("click", onClickChangeColor);

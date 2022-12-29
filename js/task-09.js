//task Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
//f.e Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const changeColorBtn = document.querySelector(".change-color");
const textEl = document.querySelector("color");

function getRandomHexColor() {
	return (textEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
// span.textContent;
// function onClickChangeColor() {
// 	const smthReturn = getRandomHexColor();

// 	textEl.textContent = smthReturn;
// 	console.log(textEl.textContent);
// 	console.log((textEl.textContent = getRandomHexColor()));
// 	return "hello";
// }
changeColorBtn.addEventListener("click", getRandomHexColor);

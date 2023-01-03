// //task Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// //f.e Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// //f.e Розміри найпершого <div> - 30px на 30px.
// //f.e Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// //f.e Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// //f.e Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type = "number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const containerEl = document.querySelector("#boxes");

let boxSize = 30;
let inputElValue = 0;

inputEl.addEventListener("change", (e) => (inputElValue = Number(e.target.value)));
//in eventListener function you can add only one argument - event, so if you need any other argument, then make callback inside the function 👇
createBtn.addEventListener("click", () => createBoxes(inputElValue));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	const elementsArr = [];

	if (!containerEl.lastElementChild) {
		boxSize = 30;
	}

	for (let i = 0; i < amount; i += 1) {
		elementsArr.push(
			`<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
		);
		boxSize += 10;
	}

	return containerEl.insertAdjacentHTML("beforeend", elementsArr.join(""));
}

function destroyBoxes() {
	if (containerEl.children.length > 0) {
		containerEl.innerHTML = "";
	}
}

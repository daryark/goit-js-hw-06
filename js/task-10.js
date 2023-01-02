//task Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//f.e Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//f.e Розміри найпершого <div> - 30px на 30px.
//f.e Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//f.e Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

//f.e Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numEl = document.querySelector('input[type = "number"]');
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const containerEl = document.querySelector("#boxes");

let numElValue = 0; // saves input's value
function check(event) {
	numElValue = event.target.value;
}

const elementsArr = []; //saves arr of els to push in html
function createBoxes({ amount = 30 }) {
	destroyBoxes();

	for (let i = 1; i <= numElValue; i += 1) {
		const currentColor = getRandomHexColor();

		i === 1 ? amount : (amount += (i - 1) * 10);

		elementsArr.push(
			`<div style = "width: ${amount}px; height: ${amount}px; background-color: ${currentColor}"></div>`
		);
	}

	return containerEl.insertAdjacentHTML("beforeend", elementsArr.join(""));
}

function destroyBoxes() {
	if (containerEl.children.length > 0) {
		containerEl.innerHTML = "";
		elementsArr.splice(0, elementsArr.length);
	}
}

numEl.addEventListener("change", check);
createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);

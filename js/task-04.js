//task Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//f.e Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//f.e Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

const counterDecrementEl = document.querySelector('button[data-action="decrement"]');
const counterIncrementEl = document.querySelector('button[data-action="increment"]');
const counterNumberEl = document.querySelector("#value");
let counterValue = 0;
counterNumberEl.textContent = counterValue;

const increaseFunc = () => {
	counterNumberEl.textContent = counterValue + 1;
	return (counterValue += 1);
};
const decreaseFunc = () => {
	counterNumberEl.textContent = counterValue - 1;
	return (counterValue -= 1);
};

increaseFunc();
decreaseFunc();

counterDecrementEl.addEventListener("click", decreaseFunc);
counterIncrementEl.addEventListener("click", increaseFunc);

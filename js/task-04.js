//task Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//f.e Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//f.e Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

const counterDecrementEl = document.querySelector('button[data-action="decrement"]');
const counterIncrementEl = document.querySelector('button[data-action="increment"]');
const counterNumberEl = document.querySelector("#value");
let counterValue = counterNumberEl.textContent;

const increaseFunc = () => (counterNumberEl.textContent = Number(counterNumberEl.textContent) + 1);

const decreaseFunc = () => (counterNumberEl.textContent = Number(counterNumberEl.textContent) - 1);

increaseFunc();
decreaseFunc();

counterDecrementEl.addEventListener("click", decreaseFunc);
counterIncrementEl.addEventListener("click", increaseFunc);

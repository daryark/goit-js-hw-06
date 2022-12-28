// c: initial arr 👇
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

//task Напиши скрипт, який для кожного елемента масиву ingredients:
//f.e.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//f.e Додасть назву інгредієнта як його текстовий вміст.
//f.e Додасть елементу клас item.
//f.e Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const createLiEls = (ingredientsArr) => {
	const elsArr = ingredientsArr.map((ingredient) => {
		const itemEl = document.createElement("li");
		itemEl.classList.add("item");
		itemEl.textContent = ingredient;

		return itemEl;
	});

	const listEl = document.querySelector("#ingredients");
	listEl.append(...elsArr);

	// return listEl; //? uncomment to see list in console
};

console.log(createLiEls(ingredients));

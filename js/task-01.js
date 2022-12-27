//task Напиши скрипт, який:Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const countLiEls = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${countLiEls}`);

//task Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const findCategories = ([...categories]) =>
	categories.map((category) => {
		const h1ElContent = category.firstElementChild.textContent;
		// const countCategoryEls = category.lastElementChild.children.length;
		const countCategoryEls = category.querySelector("ul").children.length;
		console.log(`Category: ${h1ElContent}`);
		console.log(`Elements: ${countCategoryEls}`);
	});

findCategories(document.querySelectorAll(".item"));

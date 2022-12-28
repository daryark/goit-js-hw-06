//c: initial arr 👇
const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// task Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
//f.e Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//f.e Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//f.e Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const makeGalleryMarkup = images
	.map(
		({ url, alt }) =>
			`<li>
			<img src="${url} alt="${alt} height="500">
			</li>`
	)
	.join("");

const listEl = document.querySelector(".gallery");
listEl.style.display = "flex";
listEl.insertAdjacentHTML("beforeend", makeGalleryMarkup);

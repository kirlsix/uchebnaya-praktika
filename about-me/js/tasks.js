console.log("Скрипт подключен");

// Задача 1

const fullName = 'Федоров Кирилл';

const group = 'ИС-1-25';

let pagesCount = 5;

const isStudent = true;

console.log('Имя: ' + fullName);

console.log(`Группа: ${fullName}, страниц на сайте: ${pagesCount}`);

pagesCount += 1;

console.log(`После доработки страниц: ${pagesCount}`);

console.log('Студент: ', isStudent)

// Задача 2

console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));

// Задача 3

const width = 8;
const height = 5;
console.log('Площадь: ', width * height);
console.log('Периметр', 2 * (width + height));

const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const average = (mark1 + mark2 + mark3) / 3;
console.log('Средний балл: ', average.toFixed(2));

const totalMinutes = 135;
const hours = Math.floor(totalMinutes/60);;
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

// Задача 4

const city = '  Чебоксары  ';
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = 'Практика по веб-разработке';
console.log(text.slice(0, 8));
console.log(text.includes('веб'));

const greeting = `Привет ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);

// Самостоятельная часть
let price = 1200;
const discount = 15; // 15 процентов скидка
price = price * (1-(discount/100));
console.log(`Цена со скидкой: ${price} рублей`);
console.log(`Размер скидки: ${discount} процентов`);

const myString = 'Привет! Это моя строка и я занимаюсь учебной практикой.';
console.log(myString.length);
console.log(myString.slice(0, 5));
console.log(myString.toUpperCase());
console.log(myString.includes('Привет'));

// Разбор ошибок.

// console.log('Привет); 
// console.log(fulName);
// let pagesCount;
fullName = 'Привет';

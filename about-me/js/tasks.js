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

const return1 = 5;
const return2 = 4;
const return3 = 5;
const average = (return1 + return2 + return3) / 3;
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

// console.log('Привет'); 
// console.log(fullName);
// let pagesCount;
// fullName = 'Привет';

// ==== Пара 23: условия и циклы =====

// Задача 5
const number = 100;

if (number % 2 === 0) {
    console.log(number + ' - Чётное');
} else {
    console.log(number + ' - Нечётное');
}

if (number > 0) {
    console.log('Положительное');
} else if (number < 0) {
    console.log('Отрицательное');
} else {
    console.log('Ноль');
}

/* const userNumber = Number(prompt('Введите целое число'));

if (Number.isNaN(userNumber)) {
    console.log('Это не число');
} else if (userNumber % 2 == 0) {
    console.log(userNumber + ' - чётное');
} else {
    console.log(userNumber + ' - нечётное');
}
*/

// Задача 6

function getMark(points) {
    if ((points > 100) || (points < 0)) {
        console.log('Баллы должны быть от 0 до 100');
    } else if (points>=90) {
        return 5;
    } else if (points>=75) {
        return 4;
    } else if (points>=60) {
        return 3;
    } else {
        return 2;
    }
}

// Задача 7

const dayNumber = 3;
let dayName

switch (dayNumber) {
    case 1:
        dayName = 'понедельник';
        break;
    case 2:
        dayName = 'вторник';
        break;
    case 3:
        dayName = 'среда';
        break;
    case 4:
        dayName = 'четверг';
        break;
    case 5:
        dayName = 'пятница';
        break;
    case 6:
        dayName = 'суббота';
        break;
    case 7:
        dayName = 'воскресенье';
        break;
    default:
        dayName = 'Такого дня нет';
}

console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7;
console.log('Выходной: ', isWeekend)


// Cамостоятельная часть
const monthNumber = 11;
let timeOfTheYear;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        timeOfTheYear = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        timeOfTheYear = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        timeOfTheYear = "Лето";
        break;
    case 9:
    case 10:
    case 11:
        timeOfTheYear = "Осень";
        break;
}

console.log(`Время года: ${timeOfTheYear}`)

// Задача 8.

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0;
let k = 1;

while (k<=n) {
    sum = sum + k;
    k += 1
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`);

//  ===== Пара 24: функции и массивы ====


// Задача 9

function greet(name) {
    return `Привет, ${name}`;
}

console.log(greet('Анна'));

console.log(greet('Пётр'));

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

function test() {
    const inside = 'внтури';
    console.log(inside); 
}
test();
// console.log(inside)

let mark = getMark(30)
console.log(mark)

// Задача 10

const square = (x) => x * x;
const celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
const addNumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiusToFahrenheit(20));
console.log(addNumbers(2, 3));

const isEven2 = (x) => x % 2 === 0;
console.log(isEven2(12));

// Задача 11 

const subjects = ['Математика', 'Информатика', 'Физика'];
console.log(subjects.length);
console.log(subjects[0]);
console.log(subjects[subjects.length - 1]);

subjects.push('История');
console.log(subjects);
const removed = subjects.pop();
console.log('удалили: '+ removed);

for (const subject of subjects) {
    console.log('предмет: '+ subject);
}

const grades = [5, 4, 3, 5, 4];
function getAverage(list) {
    let total = 0
    for (const value of list) {
        total += value;
    }
    return total / list.length;
}
console.log('Средняя оценка: ', getAverage(grades).toFixed(2));

let best = grades[0];
for (const value of grades) {
    if (value > best) {
        best = value;
    }
}
console.log('Лучшая оценка:', best);

let lowest = grades[0];
for (const value of grades) {
    if (value < lowest) {
        lowest = value;
    }
}
console.log('Худшая оценка:', lowest);

// Задача 12
const numbers = [3, 8, 12, 5, 20, 1];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['Анна', 'Борис', 'Алексей', 'Вера'];
const startsWithA = names.filter((item) => item.startsWith('А'));
console.log(startsWithA.join(', '));
const upperNames = names.map((item) => item.toUpperCase());
console.log(upperNames);


// Самостоятельная часть пары 24

function analyzeGrades(list) {
    
    console.log('Количество оценок:', list.length);
    
    avg = getAverage(list).toFixed(2);
    console.log('Средний балл:', avg)
    const best = Math.max(...list)
    console.log('Лучшая оценка:', best);
    const lowest = Math.min(...list)
    console.log('Худшая оценка:', lowest);

    let two = list.filter((item) => item === 2).length;
    if (avg < 3.5){
        console.log('Незачёт,', 'Двоек:', two);
    } else {
        console.log('Зачёт');
    }
}

analyzeGrades([3, 2, 4, 3, 3, 2, 2, 2, 2]);

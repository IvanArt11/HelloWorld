//Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

// Version 1
function num(a, b) {
    if (a<=b) {
        return a
    } else {
        return b
    }
}

console.log(num(8, 4));
console.log(num(6, 6));

// Version 2
// const num = (a, b) => {
//     a<=b ? console.log(a) : console.log(b);
// }
// num(8, 4);
// num(6, 6);

//Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

const number = (n) => {
    console.log(n % 2 === 0 ? 'Число четное' : 'Число нечетное');
}

number(5);

//Задание 3
//Задание 3.1
// Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

const square = (c) => {
    console.log(c**2);
}

square(4);

//Задание 3.2
// Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

const squareReturn = (d) => {
    return d**2;
}
// console.log(squareReturn(5));

//Задание 4
// Создайте функцию, которая:
// 1. Спрашивает у пользователя, сколько ему лет.
// 2. Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// 3. Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// 4. Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».
// *Подсказка: можете выполнить это задание с помощью оператора if else.

const answer = () => {
   let q= prompt('Сколько вам лет?');
   if (q<0) {
        alert('Вы ввели неправильное значение');
   } else if (q>=0 && q<=12) {
        alert('Привет, друг!');
   } else if (q>=12) {
        alert('Добро пожаловать!');
    } 
}

answer();

//Задание 5
// Напишите функцию, которая на вход принимает 2 числа:
// 1. Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и isNaN() помогут.)
// 2. Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// 3. Если оба параметра — числа, то вернуть произведение данных чисел.

function mult (f, g) {
    if (!isNaN(f) && !isNaN(g)) {
        return f * g;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(mult(3, 5));
console.log(mult(3, 'dsa'));

//Задание 6
// Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
// 'n в кубе равняется <получившееся значение>'. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
// Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
// от 0 до 10 включительно.

const cube = (n1) => {
    n1= prompt('Введите любое число')
    //  if (!isNaN (n1)) {
    // console.log(`${n1} в кубе равняется ${n1 ** 3}`);
    //  } else {
    // console.log('Переданный параметр не является числом');
    //  }
    console.log(!isNaN(n1) ? `${n1} в кубе равняется ${n1**3}` : 'Переданный параметр не является числом');
    let i=0;
    while (i>=0 && i<=10) {
        console.log(`${i} в кубе равняется ${i ** 3}`);
        i++;
    }
}

cube();

//Задание 7
// Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea, которое возвращает площадь круга через радиус, а также getPerimeter, который возвращает периметр окружности.

function getRectangleArea() {
    return this.radius * this.radius * 3.14;
}

function getRectanglePerimeter() {
    return this.radius * 3.14 * 2; 
}

const circle1 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 5,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
// Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").
// Придумайте, как должна работать функция, если ей передать неправильный параметр.
// Выведите пример использования функции в консоль.
// Для решения задачи используйте конструкцию else if и логические операторы || (логическое ИЛИ) и && (логическое И).

const game1 = () => {
    let monthNumber= Number(prompt('Введите номер месяца'));
    if (monthNumber===1 || monthNumber===2 || monthNumber===12) {
        return alert('Зима');
    } else if (monthNumber>2 && monthNumber<=5) {
        return alert('Весна');
    } else if (monthNumber>5 && monthNumber<=8) {
        return alert('Лето');
    } else if (monthNumber>8 && monthNumber<=11) {
        return alert('Осень');
    } else {
        return alert('Некорректные данные');
    } 
}

game1();
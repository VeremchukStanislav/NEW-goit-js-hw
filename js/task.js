// Задание 1
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// При объявлении присвой переменным следующие характеристики товара:

//     название - строка 'Дроид';
//     цена за штуку - число 2000.

const productName = 'Дроид';
const pricePerItem = 2000;

console.log(productName);
// 'Дроид'

console.log(pricePerItem);
// 2000

// Задание 2
// Имя товара изменили на 'Ремонтный дроид' и увеличили его цену на 1500 кредитов.
// Переопредели значения переменных pricePerItem и productName после их объявления.

let productName = 'Дроид';
let pricePerItem = 2000;
console.log (productName = 'Ремонтный дроид');
console.log (pricePerItem = 3500);

// Задание 3
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

//     topSpeed - число 160.
//     distance - число 617.54.
//     login - строка 'mango935'.
//     isOnline - буль true.
//     isAdmin - буль false.

const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

// Задание 4
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество едниц товара в заказке.

const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

// Задание 5
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
// Вы выбрали < имя товара >, цена за штуку < цена товара > кредитов.
// Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.
// Используй синтаксис шаблонных строк.

const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;
console.log(message);

// Задание 6
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа.
// Объяви переменные и присвой им соответствующие значения:

//     pricePerDroid - цена одного дроида, значение 800;
//     orderedQuantity - количество дроидов в заказе, значение 6;
//     deliveryFee - стоимость доставки, значение 50;
//     totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
//     message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму < сумма заказа > кредитов.
//     Доставка(<цена доставки> кредитов) включена в сумму заказа.

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
console.log(message);

// Задание 7
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Привет, это моя первая функция!'.

// После объявления вызови функцию sayHi.

function sayHi() {
  console.log ('Привет, это моя первая функция!')
}
sayHi();

//Задание 8
// Функция add должна уметь складывать три числа и выводить результат в консоль.
// Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку 'Результат сложения равен <результат>',
// где < результат > это сумма переданных чисел.

function add(a,b,c) {
  console.log(`Результат сложения равен ${a+b+c}`);
  // Пиши код выше этой строки
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Задание 9
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
return (a + b + c)
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Задание 10
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

//     name - название товара
//     price - цена товара

// Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали < имя товара >,
// цена за штуку < цена товара > кредитов, где < имя товара > и < цена товара > это значения параметров name и price.
// Используй синтаксис шаблонных строк.

function makeMessage (name, price) {
   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
    //console.log(message);
    return message;
};

makeMessage('Радар', 6150)
makeMessage('Сканер', 3500)
makeMessage('Реактор', 8000)
makeMessage('Двигатель', 4070)

// Задание 11
// Функция calculateTotalPrice считает и возвращает общую сумму покупки.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

//     orderedQuantity - количество единиц товара в заказе;
//     pricePerItem - цена одной единицы товара.

// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки,
// результат умножения кол - ва товаров на цену одного.

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem ;
  return totalPrice;
};

// Задание 12
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// составляет и возвращает сообщение о покупке ремонтных дроидов.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова.

//     orderedQuantity - количество дроидов в заказе
//     pricePerDroid - цена одного дроида
//     deliveryFee - стоимость доставки

// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате
// Вы заказали дроидов на сумму < сумма заказа > кредитов.Доставка(<цена доставки> кредитов) включена в сумму заказа.. 
// Не забудь о цене доставки при вычислениях общей стоимости.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
  const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
    // console.log(message);
    return message;
}
makeOrderMessage(2, 100, 50)
makeOrderMessage(4, 300, 100)
makeOrderMessage(10, 70, 200)

// Задание 13
// Функция isAdult объявляет один параметр age(возраст), значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
  const passed = age >= 18;
    // console.log(passed);
  return passed;
}
isAdult(20)
isAdult(14)
isAdult(8)
isAdult(37)
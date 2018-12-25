/*alert('Я - JavaScript');
console.log('XXX');

var message;
message = 'Hello';
console.log(message);

var user = 'Zoya', message = 'Hello';
console.log(user);
console.log(message);

var hello = 'Hello world!';
var message;
message=hello;

alert(hello);
alert(message);

var name, admin; // Сopy data

name='Vasia';
admin=name;

alert(admin);

var planet = 'Earth';
alert(planet);

var visitor = 'Peter';
alert(visitor);

var x = 5; // Integer
var text = 'Привет, это строчные данные!'; // String
var logic1 = true; // Boolean
var logic2 = false;
 
console.log(x);
console.log(text);
console.log(logic1);
console.log(logic2);

var x = 5;
var y = 20;

var summ = x + y;
var dif = x - y;
var mul = x * y;
var div = x / y;

console.log('Сумма:', summ);
console.log('Разность:', dif);
console.log('Произведение:', mul);
console.log('Деление:', div);
*/

/*var i = 10;

console.log(i);
console.log(i--); // Декремент
console.log(i);
console.log(++i); // Инкремент

var a = 'Hello ';
var b = 'world!';
var result = a + b;

console.log(result);

var a = 'Hello ';
var b = 'world!';

console.log(a + b);

var a = 'Hello ';
var b = 5; // Склеевание строчного и числового значения. Они превращаются в строчное значение.

console.log(a + b);

var a = true;
var b = false;

console.log(a + b);

var pear = '3';
var plum = '6';

console.log(pear + plum); //Бинарным плюсосом сложили строки

var pear = '3';
var plum = '6';

console.log(+pear + +plum); // Унарным плюсом преобразовали строки в числа и сложили их.
 
var a = (5, 6);

alert( a );

alert( 3 > 4 );
alert( 3 < 4 );
alert( 3 == 3 );

var years = prompt('Сколько Вам лет?', 100);

alert('Вам ' + years + ' лет!');

var isAdmin = confirm('Вы - администратор?');

alert(isAdmin);



var a = 12; // Условия

if (a > 10) {
	console.log('а больше 10');
} else if (a == 10) {
	console.log('а равно 10');
} else {
	console.log('а меньше 10');
}
 
var age = 10;

if ( age >= 18 && age <= 60) {
	console.log('Вам от 18 до 60'); // При условии, что возраст больше или равно 18 и меньше или равно 60. Должны соблюдаться два услвия
} 

var age = 15;

if ( age < 18 || age > 60) {
	console.log('Вам меньше 18 или больше 60'); // Условие или ||
} 

// Массивы

var country1 = 'Russia';
var country2 = 'Itaty';
var country3 = 'USA';
var country4 = 'France';

console.log( country1 );
console.log( country2 );
console.log( country3 );
console.log( country4 );

// Создаем массив, который записывается в квадратные скобки.
 var countries = [ 'Russia', 'Itaty', 'USA', 'France' ];

// Нужно обратиться к элементу по его индексу, кот. начинается с 0, 1, ... К каждому элементу обращаемся по индексу

console.log( 'Выводим элементы массива:' );
console.log( countries[0] );
console.log( countries[1] );
console.log( countries[2] );
console.log( countries[3] );

// Метод forEach использ. для обхода массива

 var countries = [ 'Russia', 'Itaty', 'USA', 'France' ]; 

console.log( 'Выводим элементы массива через forEach:' );

countries.forEach( function(entry) {

console.log(entry);
})

// Цикл for
// от 0 до 10 увеличиваем на 1
for (var i = 0; i < 10; i++ ){
	console.log( i );
}
// от 10 до 0 уменьшаем на 1
for (var i = 10; i > 0; i-- ){
	console.log( i );
}

// Обход массива с помощью цикла 
var countries = [ 'Russia', 'Itaty', 'USA', 'France' ];

for (var i = 0; i < 4; i++) {
	console.log(countries[i]);
}

// Обход массива с помощью цикла length

var countries = [ 'Russia', 'Itaty', 'USA', 'France' ];

	//console.log(countries.length);
for (var i = 0; i < countries.length; i++) {
	console.log(countries[i]);
}*/




var name = prompt('Sorry, what is your name?');

	alert('My name is ' + name );



function factorial(x) {
	return (x != 1) ? x * factorial(x - 1) : 1;
    }
    console.log( 'Это факториал:', factorial(6) );


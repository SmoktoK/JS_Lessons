//  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var obj = {}, yourNumber;

do {
    yourNumber = prompt('Введите целое число от 0 до 999');
    if (yourNumber < 0) {
        alert('Введено число меньше 0');
    } else if (isNaN(yourNumber)) {
        yourNumber = -1;
        alert('Введено недоспустимое значение');
    } else if (yourNumber > 999) {
        console.log('Введеное число больше 999');
    }
} while (yourNumber < 0 || yourNumber > 999);

if (yourNumber < 10) {
    obj.hundreds = 0;
    obj.doz = 0;
    obj.units = yourNumber;
} else if (yourNumber < 100) {
    obj.hundreds = 0;
    obj.doz = yourNumber[0];
    obj.units = yourNumber[1];
} else if (yourNumber < 1000) {
    obj.hundreds = yourNumber[0];
    obj.doz = yourNumber[1];
    obj.units = yourNumber[2];
}



alert("Сотни: " + obj.hundreds + ', Десятки: ' + obj.doz + ', Единицы: ' + obj.units);
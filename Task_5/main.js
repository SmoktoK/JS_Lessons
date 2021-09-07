/*
 Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

var sum = function (arg1, arg2) {
    return arg1 + arg2;
};

var dif = function (arg1, arg2) {
    return arg1 - arg2;
};

var comp = function (arg1, arg2) {
    return arg1 * arg2;
};

var div = function (arg1, arg2) {
    console.log(arg2);
    if (arg2 == 0) {
        return "на ноль делить нельзя";
    }
    return (arg1 / arg2).toFixed(2);
};
var operand1 = +prompt("Введите первый операнд");
var operand2 = +prompt("Введите второй операнд");
document.write("<ul>Задание №5: <li>" + sum(operand1, operand2) + ";</li> <li>" + dif(operand1, operand2) + ";</li> <li>" + comp(operand1, operand2) + ";</li> <li>" + div(operand1, operand2) + ";</li> </ul>");
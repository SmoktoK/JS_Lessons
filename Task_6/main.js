/*
 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */


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

var mathOperation = function (arg1, arg2, operation) {
    var res = 0;
    console.log(arg1);
    console.log(arg2);
    switch (operation) {
        case "+":
            res = sum(arg1, arg2);
            break;
        case "-":
            res = dif(arg1, arg2);
            break;
        case "*":
            res = comp(arg1, arg2);
            break;
        case "/":
            res = div(arg1, arg2);
            break;
    };

    document.write("Задание №6: результат операции: " + res + ";<br>");
    return res;
};

var arg1 = +prompt("Введите первое число");
var arg2 = +prompt("Введите второе число");
var operation = prompt("Введите знак операции(/,*,+,-)");

mathOperation(arg1, arg2, operation);




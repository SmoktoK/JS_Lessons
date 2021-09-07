
var val = parseInt(prompt("Введите число"));
var pow = parseInt(prompt("Введите степень"));

function power(val, pow) {
    if (pow === 0) {
        return 1;
    }
    else if (pow > 0) {
        return tot = val * power(val, pow - 1);
    }
    else if (pow < 0) {
        return tot = power(1 / val, -pow);
    }
}
power(val, pow)
document.write("Число " + val + " в степени " + pow + " равно: " + tot)
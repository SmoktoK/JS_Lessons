/*
Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
*/
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           2       префиксная форма инкремента, a = 2 ---> c = a
// d = b++; alert(d);           1       постфиксная форма инкремента, d = 1, затем b = 2;
// c = (2+ ++a); alert(c);      5       префиксная форма инкремента, a = 2 (строка 2), затем а = 3 ---> c = 2 + 3;
// d = (2+ b++); alert(d);      4       постфиксная форма инкремента b = 2 (строка 3)> d = 2 + 2, затем b = 3;
// alert(a);                    3       строка 4;
// alert(b);                    3       строка 5;
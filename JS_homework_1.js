'number' + 3 + 3 /* number33;
JavaScript читає вираз зліва направо, а на початку виразу string */

null + 3 // 3; тому що null це ніщо;

5 && "qwerty" /* qwerty; 
5 is true, 'qwerty' is true.  
If all values are truthy, the value of the last operand is returned.*/

+'40' + +'2' + "hillel";/* 42hillel;
+'40' = 40 as number;
+'2' = 2 as number;
40 + 2 = 42;
number + string = string;*/

'10' - 5 === 6; /* false;
'10' - 5 = 5, if string could be a number, it will. String - number = number;
5!=6 by the value */

true + false // 1; because true = 1, false = 0;

'4px' - 3 //NaN; '4px' is a string, we can't substract number from string;

'4' - 3 // 1; if string could be a number, it will (if there's no '+' operator);

'6' + 3 ** 0; /*61;
3**0=1;
6 is string, so string + number = string;*/

12 / '6' //2; if string could be a number, it will (if there's no '+' operator);

'10' + (5 === 6); //10false; 10 is string and 5 != 6 by the value, so it's false;

null == '' /* false;
these values are always false, it's a rule;*/

3 ** (9 / 3); //27; 9/3=3, 3*3*3=27;

!!'false' == !!'true' // true; types are equal;

0 || '0' && 1 /* 1; 
0 || '0' is true;
true is true, 1 is true; 
If all values are truthy, the value of the last operand is returned.*/

(+null == false) < 1; /* false;
+null = 0;
(+null == false) = true;
true = 1;
1<1 is false statement; */

false && true || true /* true;
false && true = false, because && - повертає true, якщо обидва операнди є true;
false || true = true, because || - повертає true, якщо хоча б один з операндів є true;*/

false && (false || true); /* false;
false || true = true, because || - повертає true, якщо хоча б один з операндів є true;
false && true = false, because && - повертає true, якщо обидва операнди є true;*/

(+null == false) < 1 ** 5; /* false
+null = 0;
(+null == false) = true;
true = 1;
1**5=1;
1<1 is false statement; */

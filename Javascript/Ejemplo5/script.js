/*Paso a paso:
1. 2**3=8
2. (1-5) = -4
3. (-4) **8 =65536
4. 4*2 = 8
5. 8/65536= 0.00012207
6. 3 + 0.00012207 = 3.00012207
*/

//EJERCICIO TIPO DE EXAMEN TIPO TEST
let resultado5= 5>3 && 2+4 == "6";
console.log("Exemplo 5: "+resultado5)

/* Paso a paso:
5>3 -> true
2+4 -> 6
6=="6" -> true
true && true -> true*/

//Exemplo 6
let x=10;
x+=5*2;
console.log("Exemplo 6: "+x)

/* Paso a paso:
x=10
x=x+5*2 -> 10+5*2
x=20 */

//Exemplo7
let arr=[1, 2, 3];
let index=1;
let valor=arr[++index]
console.log(valor)
//Da 3
//si ponemos index++ incrementa index primero mostaria el 2
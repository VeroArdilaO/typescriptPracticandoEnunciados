/* 1-Dados dos números cualquiera, desarrollar
 un algoritmo que determine el mayor y el
menor; en caso de ser iguales, imprima 
un mensaje indicándolo.*/

//BEGIN
let numberOne: number;

let numberTwo: number;

function calculo(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    alert(`${numberOne} es mayor que ${numberTwo}`);
  } else if (numberOne < numberTwo) {
    alert(`${numberOne} es menor que ${numberTwo}`);
  } else {
    alert("los numeros son iguales");
  }
}

calculo(4, 5);
//FINAL


// 2-Imprima el mayor de cuatro valores ingresados por pantalla.

//Begin

/*let valueOne : string = "x";
let valueTwo : string = "y";
let valueThree : string = "z";
let valueFour : string = "w";*/

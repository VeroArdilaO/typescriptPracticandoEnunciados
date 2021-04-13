/*Dados dos números cualquiera, desarrollar
 un algoritmo que determine el mayor y el
menor; en caso de ser iguales, imprima 
un mensaje indicándolo.*/

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

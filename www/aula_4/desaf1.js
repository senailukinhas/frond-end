//- Dado um array de números, crie um novo array apenas com os números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtra apenas os números pares
const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(pares); 

//outra forma

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares1 = numeros1.filter(n => n % 2 ===0)
console.log(pares1); 

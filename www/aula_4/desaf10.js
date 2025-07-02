// A partir de um array de números, crie um novo array apenas com os números pares. let numeros = [4, 7, 10, 13, 16, 19];

let numeros = [4, 7, 10, 13, 16, 19];
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

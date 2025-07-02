// A partir de um array de números, filtre apenas os elementos que não sejam zero. 

let numeros = [0, 5, 0, 10, 8, 0, 3];
let naoZero = numeros.filter(num => num !== 0);

console.log(naoZero); // Saída: [5, 10, 8, 3]

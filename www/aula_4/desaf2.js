// A partir de um array, retorne apenas os números maiores que 10.

let numeros = [5, 12, 8, 20, 3, 15];
let maioresQueDez = numeros.filter(num => num > 10);

console.log(maioresQueDez); // Saída: [12, 20, 15]

//outra forma

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maiorqdez = valores.filter(n => n % 2 ===0)
console.log(maiorqdez); 

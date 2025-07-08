// Dado let numeros = [1, 2, 3, 4, 5, 6, 7, 8];, use um for para contar apenas com os números impares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    contadorImpares++;
  }
}

console.log("Quantidade de números ímpares:", contadorImpares);




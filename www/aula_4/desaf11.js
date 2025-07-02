// Conte quantos elementos de um array são maiores que 10. let valores = [3, 15, 22, 9, 8, 17];

let valores = [3, 15, 22, 9, 8, 17];
let contador = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] > 10) {
    contador++;
  }
}

console.log("Quantidade de valores maiores que 10:", contador);

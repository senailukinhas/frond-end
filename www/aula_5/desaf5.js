// - Dado let nomes = ["João", "Gabriela", "Ana", "Roberto"];, conte quantos nomes possuem mais de 5 letras e exiba o total.

let nomes = ["João", "Gabriela", "Ana", "Roberto"];
let contador = 0;

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].length > 5) {
    contador++;
  }
}

console.log("Quantidade de nomes com mais de 5 letras:", contador);

// Dado um array de números, encontre o maior elemento dentro dele. let valores = [12, 45, 7, 22, 89, 34];

let valores = [12, 45, 7, 22, 89, 34];

let maior = valores[0]; // inicializa com o primeiro elemento

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
}

console.log("O maior valor é:", maior);

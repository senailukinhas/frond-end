// Dado let saldos = [100, -20, 200, -30, 150];, faça um for para somar apenas os valores positivos e exibir o resultado.

let saldos = [100, -20, 200, -30, 150];
let somaPositivos = 0;

for (let i = 0; i < saldos.length; i++) {
  if (saldos[i] > 0) {
    somaPositivos += saldos[i];
  }
}

console.log("Soma dos saldos positivos:", somaPositivos);

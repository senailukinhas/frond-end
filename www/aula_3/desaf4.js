// faça um algaritimo para exibir seguencia de fibonacci mostra os 20 primeiros termos

let termo1 = 0;
let termo2 = 1;

console.log("Sequência de Fibonacci (20 primeiros termos):");

for (let i = 1; i <= 20; i++) {
    console.log(termo1);
    let proximo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximo;
}

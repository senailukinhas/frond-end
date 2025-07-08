//Dado let valores = [3, 12, 8, 25, 7];, faça um for que conte quantos valores são maiores que 10 e imprima a quantidade.

let valores =[3, 13, 8,25,7]

let contador = 0
for (let i =0 ; i < valores.length ; ++i) {
    if(valores[i] > 10) {
        ++contador
    }
}

console.log(contador)
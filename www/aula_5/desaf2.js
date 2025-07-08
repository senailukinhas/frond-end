// Dado let notas = [7, 5, 6, 4, 8];, substitua todas as notas menores que 6 por 6 e imprima o array resultante.

//let notas = [7, 5, 6, 4, 8];
//let notasCorrigidas = notas.map(nota => nota < 6 ? 6 : nota);
//console.log(notasCorrigidas);

// outra forma

let notas = [7, 5, 6, 4, 8];

let notasTrocadas = []

for (let i = 0 ; i < notas.length ; ++i) {
    if (notas [i] < 6) {
        notasTrocadas.push(6)
    } else {
        notasTrocadas.push(notas[i])
    }
}
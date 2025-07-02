// Dado um array de nomes, retorne somente os nomes com menos de 5 letras

let nomes = ["Ana", "Lucas", "João", "Eva", "Marcos"];
let nomesCurtos = nomes.filter(nome => nome.length < 5);

console.log(nomesCurtos); // Saída: ["Ana", "João", "Eva"]



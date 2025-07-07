// 1. Variáveis
let nome = "Lucas";
let idade = 25;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// 2. Condicionais
let nota = 6;

if (nota >= 7) {
    console.log("Situação: Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Situação: Recuperação");
} else {
    console.log("Situação: Reprovado");
}

// 3. Loop for - Números ímpares de 1 a 21
console.log("Números ímpares entre 1 e 21:");
for (let i = 1; i <= 21; i += 2) {
    console.log(i);
}

// 4. Arrays - Lista de frutas
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Melancia"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

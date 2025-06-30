let idade = (40);

if (idade < 16) {
  console.log("Você não pode votar.");
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  console.log("O voto é opcional.");
} else if (idade >= 18 && idade <= 70) {
  console.log("O voto é obrigatório.");
} else {
  console.log("Idade inválida.");
}

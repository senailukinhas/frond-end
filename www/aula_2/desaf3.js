let idade = (15);

if (idade < 11 || idade > 18) {
  console.log("Não pode jogar.");
} else if (idade >= 11 && idade <= 12) {
  console.log("Categoria: Sub 11");
} else if (idade >= 13 && idade <= 14) {
  console.log("Categoria: Sub 13");
} else if (idade >= 15 && idade <= 16) {
  console.log("Categoria: Sub 15");
} else if (idade >= 17 && idade <= 18) {
  console.log("Categoria: Sub 18");
} else {
  console.log("Idade inválida.");
}

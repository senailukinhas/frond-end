let nome = prompt("Digite seu nome:");

if (nome === null || nome.trim() === "") {
  console.log("O campo 'nome' é obrigatório.");
} else {
  console.log("Campo preenchido corretamente.");
}

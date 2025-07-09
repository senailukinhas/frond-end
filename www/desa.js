// 1. Função que retorna o quadrado de um número
function quadrado(numero) {
    return numero * numero;
}

// 2. Função para verificar se é maior ou menor de idade
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("É maior de idade");
    } else {
        console.log("É menor de idade");
    }
}

// 3. Função para calcular a média aritmética de três notas
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// 4. Função para calcular a área de um retângulo
function areaRetangulo(base, altura) {
    return base * altura;
}

// 5. Função para exibir o endereço
function exibirEndereco(rua, numero, bairro, cidade, estado, cep) {
    console.log(`Endereço: ${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`);
}

// 6. Função para converter Celsius para Fahrenheit
function converter(celsius) {
    return (celsius * 9/5) + 32;
}

// 7. Função para contar o número de caracteres de uma string
function contarCaracteres(texto) {
    return texto.length;
}

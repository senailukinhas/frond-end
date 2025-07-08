// Crie uma função para exibir o seu endereço. Nessa função Rua, número, bairro, cidade, estado e cep serão parâmetros para essa função.

function exibirEndereco(rua, numero, n ,bairro, cidade, estado, cep) {
    console.log(`Endereço: Rua ${rua}, Nº ${numero}, APT ${n}, Bairro ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`);
  }
  
  // Exemplo de chamada da função
  exibirEndereco("Rua Victor Pentagna", 505, 101, "Benfica", "Valença", "RJ", "27600-000");
  
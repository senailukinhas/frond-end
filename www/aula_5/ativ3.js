// Crie uma função chamada mostrarData() que mostre a data atual no console. Dica: Use new Date() e console.log().

function mostrarData() {
    const dataAtual = new Date();
    console.log(dataAtual);
  }
  

  mostrarData();

  
  // BRASIL

  function mostrarDica() {
    console.log(new Date ().toLocaleString('pt-BR' , {  timezone: 'America/sao_Paulo'}));
  }
  
  mostrarDica();
  
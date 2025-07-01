//Escreva um programa que utilize um for para imprimir todos os números pares de 2 até 20.

for (let numero = 2; numero <= 20; numero += 2) {
    console.log(numero);
  }
  
//outra maneira

for (let i = 2; i <= 20 ; i++){
    if(i%2 == 0) {
        console.log(i)
    }
}
//Usando um for, mostre a tabuada do 7 (de 7 x 1 até 7 x 10) no console

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
  
// outra forma

for (let i = 1; i <= 10; i++){
    console.log(i + "x" + 7 + "=" + i*7 )
}

// outra forma

let numero = 7
for (let i = 1; i <= 10; i++){
    console.log(i + "x" + numero + "=" + i*numero )
}
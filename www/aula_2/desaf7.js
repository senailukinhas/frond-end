function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }
  

  console.log(ehBissexto(1600)); 
  console.log(ehBissexto(1700)); 
  console.log(ehBissexto(1800)); 
  console.log(ehBissexto(1900)); 
  console.log(ehBissexto(2000)); 
  console.log(ehBissexto(2016)); 
  console.log(ehBissexto(2017)); 
  console.log(ehBissexto(2019)); 
  console.log(ehBissexto(2023)); 
  console.log(ehBissexto(2024)); 
  console.log(ehBissexto(2028)); 
  console.log(ehBissexto(2100)); 
  console.log(ehBissexto(2400)); 
 
  
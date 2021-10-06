/* 1) Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
a) Se o número for múltiplo de 5, retornar "Bora".
b) Se o número for múltiplo de 3, retornar "Dale".
c) Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d) Chamar a função e exibir no console o resultado. */

var valorInteiroPositivo = (num) => {
  
    if(Number.isInteger(num)){
      
      if(num > 0 ){
        
        if(num % 5 === 0 && num % 3 === 0){
          return ("JAVASCRIPT");
        }
        else if(num % 5 === 0){
          return ("Bora");
        }
        else if(num % 3 === 0){
          return ("Dale");
        }
      }
    }
  }
  
        console.log(valorInteiroPositivo(15));

/* 2)      Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário. 
a) Escrever o signo referente a data de aniversário de acordo com a tabela acima.
b) Chamar a função e exibir no console o resultado. */

var aniversario = (dia, mes) => {
  
    if(dia >= 21 && mes === "Março" || dia <= 20 && mes === "Abril"){
      return "Áries";
    }
    else if(dia >= 21 && mes === "Abril" || dia <= 20 && mes === "Maio"){
      return "Touro";
    }
    else if(dia >= 21 && mes === "Maio" || dia <= 20 && mes === "Junho"){
      return "Gêmeos";
    }
    else if(dia >= 21 && mes === "Junho" || dia <= 22 && mes === "Julho"){
      return "Câncer";
    }
    else if(dia >= 23 && mes === "Julho" || dia <= 22 && mes === "Agosto"){
      return "Leão";
    }
    else if(dia >= 23 && mes === "Agosto" || dia <= 22 && mes === "Setembro"){
      return "Virgem";
    }
    else if(dia >= 23 && mes === "Setembro" || dia <= 22 && mes === "Outubro"){
      return "Libra";
    }
    else if(dia >= 23 && mes === "Outubro" || dia <= 21 && mes === "Novembro"){
      return "Escorpião";
    }
    else if(dia >= 22 && mes === "Novembro" || dia <= 21 && mes === "Dezembro"){
      return "Sagitário";
    }
    else if(dia >= 22 && mes === "Dezembro" || dia <= 19 && mes === "Janeiro"){
      return "Capricórnio";
    }
    else if(dia >= 20 && mes === "Janeiro" || dia <= 18 && mes === "Fevereiro"){
      return "Aquário";
    }
    else if(dia >= 19 && mes === "Fevereiro" || dia <= 20 && mes === "Março"){
      return "Peixes";
    }
    else{
      return "Erro!";
    }
  } 
  
    console.log(aniversario(15,"Janeiro"))
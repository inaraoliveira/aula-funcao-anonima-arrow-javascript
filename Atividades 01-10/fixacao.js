/* 1) Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
a) Transformar todos os elementos em letras maiúsculas. */

var capitaisNordeste = function (cidades){
    let capitais = [];
    
    for(i = 0; i < cidades.length; i++){
      capitais.push(cidades[i].toUpperCase());
    }
    
    return (capitais);
  }
  
    console.log(capitaisNordeste(["São Luís", "Recife", "Natal", "Fortaleza", "João Pessoa"]));

    /* 2) Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
a) Chamar a função e exibir no console o retorno da função.  */

var numeros = function (){
    let numerosPares = [];
    
    for(let i = 101; i < 450; i++){
      if(i % 2 === 0){
       numerosPares.push(i); 
      }
    }
       return (numerosPares);
  }
      console.log(numeros());

/* 3) Criar uma função anônima que recebe quatro strings:
a) Concatenar as strings e retornar o resultado.
b) Chamar a função e exibir no console o resultado. */

var receberStrin = function (strin1, strin2, strin3, strin4){
    let juntarStrin = strin1.concat(" " + strin2 + " " + strin3 + " " + strin4);
    
    return (juntarStrin);
  }
  
  console.log(receberStrin("Meu", "nome", "é", "Inara"));
// const array =  [1, 2, 3, 4, 5];

// array[0] = 10; // Altera o primeiro elemento do array
// console.log(array); // Saída: [10, 2, 3, 4, 5]

// const meuArray = [];
// meuArray.push(1); // Adiciona o elemento 1 ao array
// meuArray.push(2); // Adiciona o elemento 2 ao array
// meuArray.push(3); // Adiciona o elemento 3 ao array
// console.log(meuArray); // Saída: [1, 2, 3]

// meuArray[0] = 1 * 2
// console.log(meuArray)

// const Clinica = []
// Clinica.push("cachorro")
// Clinica.push("gato")
// Clinica.push("peixe")
// console.log(Clinica)
// console.log(Clinica.length)
// Clinica.pop()
// console.log(Clinica)
// console.log(Clinica.length)

 
// const funcao =[[ 1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10]]
// const junto = funcao[0].concat(funcao[1])
// console.log(junto)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const partesNumeros = numeros.slice(3,8) // Extrai os elementos do índice 3 ao 7 (não inclui o índice 8)
// console.log(partesNumeros) // Saída: [4, 5, 6, 7]

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

// frutas.splice( 2,3, "Kiwi", "Pessego") // Remove 3 elementos a partir do índice 2 e adiciona "Kiwi" e "Pêssego"
// console.log(frutas) 

// const menuPrincipal = ['Home', 'Sobre', 'Serviços', 'Contato']
// const menuSobremesa = ['Bolo', 'Torta', 'Sorvete', 'Pudim']
// const menuCompleto = menuPrincipal.concat(menuSobremesa) // Concatena os dois arrays
// console.log(menuCompleto) // Saída: ['Home', 'Sobre', 'Serviços', 'Contato', 'Bolo', 'Torta', 'Sorvete', 'Pudim']
//1. Crie uma função que receba dois arrays e os concatene em um único array.

const funcionarios = ['Claudia Rodrigues', 'Roberta Reis', 'Jane Martins'];
const salarios = [30000.00, 40000.00, 7000.00, 10000.00];

const folhaDePagamento = [funcionarios, salarios];

    console.log(`Funcionária: ${folhaDePagamento[0][1]}.   
    Salário atual: R$ ${folhaDePagamento[1][1]}.`);


/*2. Crie um array chamado numeros contendo números de 1 a 10. 
Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.*/

              //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const selecionandoNumeros = numeros.slice(3, 8);

    console.log(`Os números selecionados do array foram: `, selecionandoNumeros);


/*3. Dado o array frutas contendo frutas que desejamos comprar na feira:
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses 
mesmos índices.*/

const frutas = ['Maça', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2,'Kiwi', 'Pêssego');


    console.log('A nova lista tem as seguintes frutas: ', frutas);


/*4. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal 
seguidos pelos elementos de menuDeSobremesas.*/

const menuPrincipal = ['Spaguette', 'Gnocchi', 'Lasanha', 'Fetuccine', 'Raviole'];
const menuDeSobremesas = ['Brownie com Sorvete', 'Torta de Limão', 'Sorvete', 'Tortelete'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

    console.log(`Veja o menu completo de nosso restaurante: ${menuCompleto}`);


/*5. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores 
iniciando em 1 e aumentando em 1 a cada elemento.*/
// Cria a matriz principal
const matriz = [];
let contador = 1;

// Laço para criar as 3 linhas da matriz
for (let i = 0; i < 3; i++) {
  const linha = [];

  // Laço para criar as 3 colunas da matriz
  for (let j = 0; j < 3; j++) {
    const submatriz = [];

    // Laço para montar as linhas da submatriz 3x3
    for (let k = 0; k < 3; k++) {
      const linhaSub = [];

      // Laço para montar os valores de cada linha da submatriz
      for (let l = 0; l < 3; l++) {
        linhaSub.push(contador);
        contador++;
      }

      submatriz.push(linhaSub);
    }

    linha.push(submatriz);
  }

  matriz.push(linha);
}

// Exibe todas as submatrizes com console.table()
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Submatriz [${i}][${j}]:`);
    console.table(matriz[i][j]);
  }
}
console.log(matriz[0][0][0])

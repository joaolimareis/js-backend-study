const notas = [10, 6, 8, 5.5,10]
notas.pop(7)
console.log(notas)

const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"



let array = [1, 2, 3, , 5];

 // Saída: [1, 2, 3, 4] - O último elemento (5) foi removido
console.log(array.length); 
console.log(array);

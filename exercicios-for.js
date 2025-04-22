// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// function lista(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(i,array[i]);
//     }
// }
// console.log(lista([1, 2, 3, 4, 5]));

// function numerosInteiros(array){
//     let somanumero = 0;
//     for (let i = 0; i < array.length; i++) {
         
//          somanumero += array[i];
//     }
//     return somanumero //Sempre que quiser que uma função "te devolva" algum valor, use return.
// }
// console.log(numerosInteiros([1, 2, 3, 4, 5]));

// function numerosMaioreMenor(array){
//     let maior = array[0]; // Inicializa maior com o primeiro elemento do array
//     let menor = array[0]; // Inicializa menor com o primeiro elemento do array
//     for (let i of array) {
//         if (i > maior) {
//             maior = i;
//         }else if (i < menor) {
//             menor = i;
//         }
//     }
//     return `O maior número é ${maior} e o menor número é ${menor}` //Sempre que quiser que uma função "te devolva" algum valor, use return.
// }
// console.log(numerosMaioreMenor([1, 2, 3, 4, 5]));

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log(`${numeros[i]} é par`)
    }else{
        console.log(`${numeros[i]} é impar`)
    }
}








// const notas = [8,6,4,10]
// let somanotas = 0
// for(let i = 0; i < notas.length; i++){
//     somanotas += notas[i]
// }
// let media = somanotas / notas.length
// console.log(media)
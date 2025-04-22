const notas = [10, 6, 8, 5.5, 10]

let somatoriaDasNotas = 0

for(let i = 0; i < notas.length; i++){
    somatoriaDasNotas += notas[i]
  

}
let media = somatoriaDasNotas / notas.length
console.log(media)

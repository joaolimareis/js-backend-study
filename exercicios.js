//Questao 1
const nome = ["João", "Monyk","Alane", "Tedson","Luana", "Luiza"]
nome.push("Diana")//add no final do array
nome.unshift("Elias")//add no começo do array
nome.pop("Diana")//remove o último elemento do array
nome.shift("Elias")//remove o primeiro elemento do array


//Questao 2
const frutas = ["Maça","Banana", "Pera","Uva"]

const verificarFrutas = (fruta) => {
    if (frutas.includes(fruta)){
        const posicao = frutas.indexOf(fruta)
        console.log(`A ${fruta} esta na lista e na posicao ${posicao}`)
    }else{
        console.log(`A ${fruta} nao esta na lista`)
    }

}

verificarFrutas("Uva")

//Questao 3
const cores = ["vermelho", "azul", "amarelo", "verde", "cinza"]

cores.splice(2,1)
console.log(cores) //modificar o array
console.log(cores.slice(0, 3)) // criar outro array

cores.join(",")//altera tudo
console.log(cores) 

//questao 4
const ling = ["Js","PY","Ruby","C#", "Java"]

console.log(ling.length)
ling.push("C++", "C")
console.log(ling.length)

const mostrarLista = (lista) => {
    let array = lista
    let posicao = lista.length
    if (array ){
        console.log(`A lista contem ${posicao} elemento(s)`)

        if(array.includes("JS")=== true){
            console.log("A lista contem a JS")
        }else(
            console.log("JS nao esta na lista")
        )
    }
    console.log(array.join("-"))

    
}
mostrarLista(["C++", "C","JS"])
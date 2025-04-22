// const valorSaldo = 1000;
// const valorDeposito = 500;
// const valorSaque = 200;

// const saque = valorSaldo - valorSaque;
// console.log("Saque realizado. Saldo atual: " + saque);

// const numero = 4
// const  res = numero % 2 === 0 ? "par" : "ímpar";
// console.log("O número " + numero + " é " + res);

// const permissao = true;
// const login = true;
// if (permissao && login === true) {
//     console.log("Acesso total concedido.");
// }

// const idadeMinima = 18;
// const idade = 17;

// if (idade >= 18) {
//   console.log('Idade aceita');
// } else console.log('Idade nao permitida');


const verificarPalvra = palavra => {
    let palavraInvertida = palavra.split("").reverse().join("")
    if (palavra === palavraInvertida){
        return true;
        
    }else {
        return false
    }  

}
console.log(verificarPalvra("mirim"))

function numeroMaior(a, b, c) {
    let maior = a;
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    return maior;
}
console.log(numeroMaior(2,4,6))

const calcularMedia = (base, expoente ) => {
    let potencia = base ** expoente;
    return potencia;

}
console.log(calcularMedia(2,3))


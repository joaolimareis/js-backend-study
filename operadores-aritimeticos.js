// const notaPrimeiraBi = 10;
// const notaSegundaBi = 8;
// const notaTerceiraBi = 7;
// const notaQuartaBi = 9;

// let media = (notaPrimeiraBi + notaSegundaBi + notaTerceiraBi + notaQuartaBi) / 4;


// if (media >= 7) {
//     media += media * 0.1;
//     console.log("Aprovado com média: " + media);
// }

// console.log(`A média do aluno é: ${media.toFixed(2)}`);

// const salarioMensal = 3500;
// const despesasFixas = 1200;
// const despesasVariaveis = 500;
// const economiasMensais = 800;
// const bonusAnual = 3000;

// const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
// console.log(`O resultado financeiro anual é: ${resultado.toFixed(2)}`);

// let resultado;
// resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
// console.log("O resultado da expressão é:", resultado);

let quantidade = 10;
let estoquePrordutoA = 20;

function realizarVenda(quantidade) {
    if (quantidade > estoquePrordutoA) {
        console.log("Venda não realizada. Estoque insuficiente.");

    }
    else {
        estoquePrordutoA = estoquePrordutoA - quantidade;
        console.log("Venda realizada. Estoque atualizado: " + estoquePrordutoA);
    }

}
realizarVenda(quantidade);
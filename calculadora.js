const Calculadora = (a,b) => {
    return {
        soma: () => a + b,
        subtracao: () => a - b,
        multiplicacao: () => a * b,
        divisao: () => a / b,
        potencia: () => a ** b
    }
}
console.log(Calculadora(2,3).soma())
console.log(Calculadora(2,3).subtracao())   
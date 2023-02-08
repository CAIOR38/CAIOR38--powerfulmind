//funções são as coisas mais importantes do JS
function imprimirSoma(a,b){

    console.log(a +  b)
}

    imprimirSoma(2,3)
    imprimirSoma(2, 10, 4, 5, 6, 7, 8)
    imprimirSoma ()

    // função com retorno
    function soma(a,b = 0) {
        return a + b
    }
    console.log( soma (2,10, 4, 5, 6, 7, 8))

    var square = function(numero) {return numero * numero};
    var x = square(4)
//x recebe o valor 16
console.log(x)
//armazenando uma função em uma variável
const imprimirSoma = function(a,b) {
    console.log( a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma (2,3))
// retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))
// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Not a Number
imprimirSoma(2, 3, 5, 6, 5, 4, 8) // prega apenas os dois primeiros
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
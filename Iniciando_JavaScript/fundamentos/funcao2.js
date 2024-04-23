//armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b){
console.log(a + b)

}

imprimirSoma(2, 3)

//criando uma function arrow
const soma = (a, b) => {
return console.log(a + b)
}

soma(2, 6)

//retorno implicito
const subtracao = (a, b) => a - b 

console.log(subtracao(10, 3))

const imprimir2 = a => console.log(a)

imprimir2("aaaaaaaaa")


// par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao ='Falaa' //contexto lexico 2
    return saudacao
}

console.log(saudacao)
console.log(exec())

console.log()

// Objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 21,
    peso: 78,
    endereco: {
        logradouro: 'Rua da tia tomas',
        numero: 637
    }
}

console.log(cliente)

let valor  // nao inicializada (vazia)
console.log(valor)

valor = null
console.log(valor) // ausencia de valor
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.price)
console.log(produto)

produto.price = 2.1
console.log(produto)

produto.price = undefined //evitar atribuir undefined
console.log(produto.price)

// delete produto.price //deletar valor do objeto usando `delete`
console.log(produto)

produto.price = null // sem price
console.log(produto)
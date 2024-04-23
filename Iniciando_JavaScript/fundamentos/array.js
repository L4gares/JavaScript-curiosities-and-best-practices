const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //informa o tamnho do array

valores.push({id: 3}, false, null, `teste`) //adiciona valores ao arrey
console.log(valores)

console.log(valores.pop())//retorna o ultimo elemento do arrey

delete valores[2]//deleta valor do array
console.log(valores)

console.log(typeof valores)



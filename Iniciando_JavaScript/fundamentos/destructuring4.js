function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // se max for maior que min eles irao se inverter
    const valor = Math.random() *(max - min) + min 
    return Math.floor(valor)
}

console.log(rand([50, 40]))
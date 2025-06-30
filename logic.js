const somaNumeros = arr => arr.reduce((soma, atual) => soma + atual, 0)
console.log(somaNumeros([1,2,3,4,5,6]));
function processarNumeros (numeros, callback) {
    for (let i = 0; i < numeros.length; i++){
        callback(numeros[i])
    }
}

processarNumeros([10,20,30], (numero) => {
    console.log(`O dobro de ${numero} é ${numero * 2}`);
    
})
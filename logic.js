function processarNumeros (arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

processarNumeros([10,20,30], (numero) => {
    console.log(`o dobro de ${numero} é ${numero * 2}`);
    
})
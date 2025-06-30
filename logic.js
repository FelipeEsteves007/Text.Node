const arr = [10, 20, 30]

function processarNumeros (arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

processarNumeros(arr, numero => console.log(`O dobro de ${numero} é ${numero * 2}`))
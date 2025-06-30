const arr = [4, 9, 2, 1]

function maiorMenor (arr){
    if ( arr.length === 0){
        return {maior: null, menor: null}
    }

    let maior = arr[0]
    let menor = arr[0]

    for (let i = 0; i < arr.length; i++){
        if ( arr[i] > maior){
            maior = arr[i] 
        }
        if (arr[i] < menor ){
            menor = arr[i] 
        }
    }
    return {maior: maior, menor: menor}
}
console.log(maiorMenor(arr));

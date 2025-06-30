function recursividade (num){
    if (num === 0) {
        return 0
    }
    else {
        return num + recursividade(num - 1)  //
    } 
}

console.log(recursividade(4));

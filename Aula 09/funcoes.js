function fatorial(numero){
    let ret = 1

    for (let i=numero; i>1; i--){
        ret*=i
    }
    return ret;
}

console.log("o Fatorial de 5 é " + fatorial(5))


const fatorial_arrow = (numero) =>{
    let ret = 1

    for (let i=numero; i>1; i--){
        ret*=i
    }
    return ret;
}

console.log("o Fatorial de 5 é " + fatorial_arrow(5))
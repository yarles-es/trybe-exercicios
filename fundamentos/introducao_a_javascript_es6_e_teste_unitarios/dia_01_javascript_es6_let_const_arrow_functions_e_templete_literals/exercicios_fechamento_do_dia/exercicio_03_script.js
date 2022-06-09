const calcularFatorial = fatorial =>{
    let inicial = 1;
    for (index = fatorial; index > 0; index -= 1){
        inicial = inicial * index;
    }
    console.log(inicial)
}
calcularFatorial(4);
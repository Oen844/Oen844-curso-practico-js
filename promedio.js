const lista1 = [
    100, 
    200,
    300,
    500,
];



function calcularMediaAritmetica(lista){
    
    // let sumaLista = 0;
    // for(let i = 0; i<lista.length; i++){
    //     sumaLista= lista[i] + sumaLista ;
        
    // }
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista/lista.length;
}

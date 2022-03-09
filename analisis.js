const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (a, b) {
  return a - b;
});

function esPar(numero) {
  if (numero % 2 == 0) {
    console.log("par");
    return true;
  } else {
    console.log("No par");
    return false;
  }
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const persona1 = lista[mitad - 1];
    const persona2 = lista[mitad];

    const mediana = calcularMediaAritmetica([persona1 + persona2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

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

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana top 10%
//(p(100-d))/100
const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
console.log(salariosColTop10);
const medianaTop10Col = calcularMediaAritmetica(salariosColTop10);
console.log("********************************");

console.log(medianaGeneralCol);
console.log(medianaTop10Col);

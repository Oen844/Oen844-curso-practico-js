const lista1 = [100, 200, 400, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 - 1];
  const promedioElemnto1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  console.log(promedioElemnto1y2);
} else {
  let mediana = lista1[mitadLista1];
  console.log(mediana);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  return sumaLista / lista.length;
}

function calcularMediana(lista){
    lista.sort();
    console.log(lista);
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const element1 = lista[mitadLista];
        const element2 = lista[mitadLista - 1];
        const promedioElemnto = calcularMediaAritmetica([element1, element2]);
        console.log(promedioElemnto);
      } else {
        let mediana = lista[mitadLista];
        console.log(mediana);
      }
}
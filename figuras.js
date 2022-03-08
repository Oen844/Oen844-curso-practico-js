//codigo del cuadrado
console.group("Cuadrado");

// const ladocuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 
// console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
 return  lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//codigo del triangulo
 console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm, "
// );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es ${alturaTriangulo}`);

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base
} 
// console.log(`El perimetro del triángulo es ${perimetroTriangulo}`);

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
// console.log(`El area del triángulo es ${areaTriangulo}`);

console.groupEnd();

//código del circulo
console.group("circulo");
// const radioCirculo = 4;
// console.log(`El readio del circulo es ${radioCirculo}`);
function diametroCirculo(radio){
    return radio * 2
} 

// console.log(`El diametro del circulo es ${diametroCirculo}`);
const pi = Math.PI;
console.log(`Pi es: ${pi}`);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 
// console.log(`El perimetro del circulo es:  ${perimetroCirculo}`);
function areaCirculo(radio){
    return (radio*radio)*pi;
} 
// console.log(`El area del circulo es:  ${areaCirculo}`);

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
    
    

}

function calcularAreaTriangulo(){
    const altura = document.getElementById("altura").value;
    console.log(altura);
    const base = document.getElementById("base").value;
    console.log(base);
    const areadTriangulo = areaTriangulo(base, altura);
    alert(areadTriangulo);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radio").value;
    const area = areaCirculo(radio);
    alert(area);
}
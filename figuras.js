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

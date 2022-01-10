// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = (lado) => lado * 4; //Arrow function
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = (lado) => lado * lado;
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();


// Código del triangulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
// console.log(`Su altura es de ${alturaTriangulo}cm`);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);
const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log(`El área del triángulo es de: ${areaTriangulo}cm^2`);
console.groupEnd();


// Código del círculo
console.group("Círculo");
// Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es de: ${radioCirculo}cm`);

// Díametro
const diametroCirculo = (radio) => radio * 2;
// console.log(`El diametro del círculo es de: ${diametroCirculo}cm`);

// PI
const PI = Math.PI;
console.log(`PI es igual a: ${PI}`);

// Circunferencia
function perimetroCirculo (radio) { //Función declarativa
    return diametroCirculo(radio) * PI;    
};
// console.log(`El perímetro del círculo es de: ${parseFloat(perimetroCirculo.toFixed(2))}cm`);

// Área
function areaCirculo(radio) { //Función declarativa
    return PI * (radio * radio);
};
// console.log(`El área del círculo es de: ${parseFloat(areaCirculo.toFixed(2))}cm^2`);
console.groupEnd();
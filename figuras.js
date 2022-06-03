// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm2");

function areaCuadrado(lado) {
    return lado * lado
}
//console.log("El area del cuadrado es: " + areaCuadrado);
console.groupEnd();
//Codigo del triàngulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, ");

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Codigo del circulo

console.group("Circulos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo);
// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); //llamando una funcion dentro de otra funciòn.
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//que hacer cuando den click en el boton calcular perimetro

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//que hacer cuando le den click al botonn calcular perimetro y area triangulo

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("inputTriangulo").value),
        lado2 = Number(document.getElementById("inputLado2").value),
        base = Number(document.getElementById("inputBase").value),
        perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);

}

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("inputBase").value),
        altura = Number(document.getElementById("inputAltura").value),
        area = areaTriangulo(base, altura);

    alert(area);
}

//calcular cuando le den click al boton

function calcularDiametroCirculo() {
    const radio = Number(document.getElementById("inputRadio").value)
    diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const radio = Number(document.getElementById("inputRadio").value)
    const perimetro = perimetroCirculo(radio);

    alert(perimetro);

}

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("inputRadio").value)
    const area = areaCirculo(radio);

    alert(area);
}
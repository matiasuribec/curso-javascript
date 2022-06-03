const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); //va a recibir una funcion para sumarlo con el segundo y tercero...
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.lenght / 2);

    if (esPar(lista.lenght)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
);
const promedioLista1 = sumaLista1 / lista1.length;

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
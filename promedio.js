
// CÁLCULO DEL PROMEDIO
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];    
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// CÁLCULO DE LA MEDIANA
// const lista = [100, 800, 600, 400000000];

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;    
    } else {
        return false;
    }
};

function calcularMediana(lista) {
    lista.sort((a,b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElementos;
    } else {
        mediana = lista[mitadLista];
    };
    return mediana;
};



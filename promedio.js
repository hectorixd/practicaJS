
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

// CÁLCULO DE LA MODA
// const lista = [3, 4, 6, 9, 3, 2, 2, 6, 9, 3, 7, 3, 9, 3, 3];

function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] +=1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    // Convierte el objeto listaCount a un array y se ordena por las veces que se
    // repite el número
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];    
    console.log(moda);
};


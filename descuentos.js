// const precioOriginal = 120;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    
    return precioConDescuento;    
}


// console.log(`El precio original es de $${precioOriginal}, menos un descuento del ${descuento}%, tendríamos un precio final de $${precioConDescuento}`);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
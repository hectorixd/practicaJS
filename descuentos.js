// const precioOriginal = 120;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    
    return precioConDescuento;    
}

function buttonPriceDiscount() {
    // Se guardan los valores del usuario en variables
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;    
    // Se utiliza la función para hacer el calculo
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);  
    // Mostramos el resultado en el navegador
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = `El precio con descuento es de: $${precioConDescuento}`;
}

// console.log(`El precio original es de $${precioOriginal}, menos un descuento del ${descuento}%, tendríamos un precio final de $${precioConDescuento}`);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
// const precioOriginal = 120;
// const descuento = 15;
const coupons = [
    {
        name: "general",
        discount: 15
    },
    {
        name: "cuate",
        discount: 25
    },
    {
        name: "vip",
        discount: 35
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    
    return precioConDescuento;    
}

function buttonPriceDiscount() {
    // Se guardan los valores del usuario en variables
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;    
    
    const isCouponValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValid);

    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`);
    } else {
        const descuento = userCoupon.discount;
        const precioDescuento = calcularPrecioConDescuento(priceValue, descuento);

        // Mostramos el resultado en el navegador
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = `El precio con descuento es de: $${precioDescuento}`;
    }
}

// console.log(`El precio original es de $${precioOriginal}, menos un descuento del ${descuento}%, tendríamos un precio final de $${precioConDescuento}`);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });



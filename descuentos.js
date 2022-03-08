const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDesciento = 100 - descuento;

    const precioConDescuento = (precio *porcentajePrecioConDesciento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;
    const priceTotal = calcularPrecioConDescuento(price, discount);
    const result = document.getElementById("ResultP");
    result.innerText = `El precio con descuento de nuestro producto es  ${priceTotal} $`;

}


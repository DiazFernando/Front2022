let total = 0;

let productos = [];
let preciosUnitarios = [];
let cantidadDeProducto = [];

let botonAgregar = document.getElementById("agregarProducto");
botonAgregar.addEventListener("click", agregarProductosAlCarrito)

let botonCalcular = document.getElementById("calcularTotal");
botonCalcular.addEventListener("click", calcularCompra);

function agregarProductosAlCarrito(){
    let producto = document.querySelector(".productoUnico").value;
    productos.push(producto);

    let precio = parseInt(document.querySelector(".precioUnitario").value);
    preciosUnitarios.push(precio);

    let cantidad = parseInt(document.querySelector(".cantidadUnitaria").value);
    cantidadDeProducto.push(cantidad);
}

function calcularCompra(){
    for (let i = 0; i < productos.length; i++) {
        
        total = total + parseInt((preciosUnitarios[i] * cantidadDeProducto[i]));
        
    }
    document.querySelector("h1").innerHTML = "Total de su compra " + total;
}
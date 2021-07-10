const producto = {
    nombre: "monitor 20\"",
    precio: 300000,
    informacion: {
        peso: "1kg",
        medida: "50 cm"
    },
    disponibilidad:["los angeles", "chillan", "concepcion"]
}
/* let nombre = producto.nombre;
let precio = producto.precio;
let medida= producto.informacion.medida; */

//const {nombre,precio,informacion} = producto;

/* Object.seal(producto)
delete producto.precio; 
console.log(precio);    */

/* producto.nombre = "xomnputador";
producto.stock = 60; 

console.log(nombre);
console.log(stock); */


const bodega ={
    nombrebodega: "los angeles",
    stockbodega: 450
}
const datosObjeto = {...producto, ...bodega};
console.log(Object.keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));


/*  function imprimir ({nombre, precio, informacion: {peso}})
{
    console.log(`Nombre:${nombre} precio:$ ${precio} peso:${peso}`);
}
imprimir(producto); 
 */


//console.log(peso);
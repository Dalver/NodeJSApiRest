// var let const tipos de variables

/* console.log("Hola Mundo!");

nombre = "David";
nombre  = 10;

var nombre;

console.log(nombre); */

let nombre = "pepito"
const apellido = "Largo";

if (true){
  let  nombre = "juanito";
}

console.log(nombre);

const persona ={
    nombre: "david",
    apellido: "largo",
    edad:28,
    nombrecompleto(){
         return `${this.nombre} ${this.apellido}`;
    }
}

console.log(persona.nombrecompleto);  
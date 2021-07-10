const numeros=[1,2,3,4,5];

console.log(numeros[1]);

const nombres=["david","andres","martin"];

console.log(nombres[2]);

const cualquierCosa=[1,"hola",2,true,{numero:1, nombre:"ignacio"}];

console.log(cualquierCosa);
console.log(numeros.length);

for (let index=0; index< numeros.length; index++)
{
    console.log("[" + numeros[index] + "]");
}

numeros.push(200); // agrega elementos
console.log(numeros);
numeros.unshift(300);
//numeros.pop();
console.log(numeros);

for (const iterator of numeros) {
    console.log(" num " + iterator);
}

numeros.forEach(function(el){
    console.log("numeros " + el)
})

const numerosnuevos = numeros.map(function(el){
    return el *2;
})
console.log(numerosnuevos);

const numerosmayores = numeros.filter(el=> el > 10);
console.log(numerosmayores);

const sumaArreglo = numeros.reduce((total,el)=> total+el,0);
console.log(sumaArreglo);
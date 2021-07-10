function sumar(numero = 45 ,numero2 = 45){
    return numero+numero2;
}

console.log(sumar(52)); 


const imprimir =function(){
    console.log("impimiendo datos!!!");
}
//console.log(imprimir()); 


const imprimir2 =()=>{
    console.log("impimiendo datos!!!");
}
//console.log(imprimir2()); 


const imprimir3 =()=>console.log("impimiendo datos!!!");

const imprimir4 =()=>"impimiendo datos!!!";
console.log(imprimir4()); 

const imprimir5 = nombre=>`Saludos ${nombre}`;
console.log(imprimir5("David")); 

const imprimir5 = (nombre,edad)=>`Saludos ${nombre} edad: ${edad}`;
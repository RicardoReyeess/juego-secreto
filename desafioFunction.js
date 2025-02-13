
function holaMundo (){
    console.log ('Hola Mundo');
}
holaMundo();

function saludo (nombre){
    console.log('Hola'+ [nombre]);
}
saludo('Ricardo');


function doubleNum (numero){
    doubleNum = numero * 2;
    console.log(`El doble del ${numero} es ${doubleNum}`);
}
doubleNum(7);

function promedio (p1, p2, p3){
    promedio = (p1 + p2 + p3) / 3;
    console.log(promedio);
}
promedio(10,9,5);


function mayorQue (n1, n2){
    if (n1>n2){
        console.log(`${n1} es mayor que ${n2}`);
    }else{
        console.log(`${n2} es mayor que ${n1}`);
    }
}
mayorQue(2,6);


function cuadrado (num){
    cuadrado = num * num;
    console.log(`El cuadrado del ${num} es ${cuadrado}`);
}
cuadrado(3);


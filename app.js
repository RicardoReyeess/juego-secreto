let numeroSecreto = 0; //esta funcion es de alcance de bloque, ya que solo sirve para esta variable o bloque de código
let intento = 1;
let listaNumSorteados = [];
let numMaximo = 10;

function asignarTexto (elemento, texto){ //indicamos que buscamos seleccionar un elemento e introducir un texto
    let elementoHTML = document.querySelector (elemento); //hacemos un query para seleccionar en el documento, un elemento HTML de cualquier tipo
    elementoHTML.innerHTML = texto; //indicamos que vamos a introducir un texto en el elemento
}

function verificarIntento (){
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numUsuario===numeroSecreto){
        asignarTexto ('p',`Acertaste el número en ${intento} ${(intento === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numUsuario>numeroSecreto){
        asignarTexto ('p','El numero secreto es menor');
        } else {
        asignarTexto ('p','El numero secreto es mayor');
        }
        intento++;
        limpiarCaja;
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTexto('h1', 'Benvenutti');
    asignarTexto('p', `Elige un numero del 1 al ${numMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //generar condiciones de inicio
    //generar numero secreto
    //reiniciar el conteo de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random () * numMaximo) + 1; //la palabra reservada 'return' sirve para indicar que va a regresar el valor siguiente
    if (listaNumSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto()//aqui hacemos recursividad al llamar a la misma función para hacer la lógica del juego
    }else{
        listaNumSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}   

condicionesIniciales();
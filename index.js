// Funciones para realizar calculos


function calcular_auto(monto) {
    monto = monto - (monto * 0.85);
    return monto;
}

function calcular_moto(monto) {
    monto = monto - (monto * 0.80);
    return monto;
}

function calcular_bicicleta(monto) {
    monto = monto - (monto * 0.75);
    return monto;
}

function calcular_lancha(monto) {
    monto = monto - (monto * 0.70);
    return monto;
}

function valor_descuento(valor, descuento) {
    let valor_final;
    if (descuento === "Si") {
        valor_final = valor - (valor * 0.10);
    } else {
        valor_final = valor;
    }
    return valor_final;
}

// Objeto para enviar a la lista

class ElementosAsegurados {

    constructor(elementoAsegurado, monto, total){
        this.elementoAsegurado = elementoAsegurado;
        this.monto = monto;
        this.total = total;
    }
}

// Lista

let lista_seguros = [];

// Funcion boton 'REALIZAR CALCULO'

function realizarCalculo() {

    // Captura de datos ingresados por el usuario
    let elementoNombre = document.getElementById("nombre");
    let elementoApellido = document.getElementById("apellido");
    let elementoElementoAsegurado = document.getElementById("elementoAsegurado");
    let elementoMonto = document.getElementById("monto");
    let elementoDescuento = document.getElementById("descuento");

    let nombre = elementoNombre.value;
    let apellido = elementoApellido.value;
    let elementoAsegurado = elementoElementoAsegurado.value;
    let monto = elementoMonto.value;
    let descuento = elementoDescuento.value;

    // Local Storage

    localStorage.setItem("nombreGuardado", nombre);
    localStorage.setItem("apellidoGuardado", apellido);
    let nombreRecuperado = localStorage.getItem("nombreGuardado");
    let apellidoRecuperado = localStorage.getItem("apellidoGuardado");

    console.log(nombreRecuperado);
    console.log(apellidoRecuperado);


    // If par los distintos tipos de Seguros donde aplican las funciones

    if(elementoAsegurado === "Auto"){
        let valor_cuota_auto = calcular_auto( monto );
        let total = valor_descuento(valor_cuota_auto, descuento);
        let ElementosAsegurados1 = new ElementosAsegurados(elementoAsegurado, monto, total);
        lista_seguros.push(ElementosAsegurados1);
    } else if(elementoAsegurado === "Moto"){
        let valor_cuota_moto = calcular_moto( monto );
        let total = valor_descuento(valor_cuota_moto, descuento);
        let ElementosAsegurados1 = new ElementosAsegurados(elementoAsegurado, monto, total);
        lista_seguros.push(ElementosAsegurados1);
    } else if(elementoAsegurado === "Bicicleta"){
        let valor_cuota_bicicleta = calcular_bicicleta( monto );
        let total = valor_descuento(valor_cuota_bicicleta, descuento);
        let ElementosAsegurados1 = new ElementosAsegurados(elementoAsegurado, monto, total);
        lista_seguros.push(ElementosAsegurados1);
    } else{
        let valor_cuota_lancha = calcular_lancha( monto );
        let total = valor_descuento(valor_cuota_lancha, descuento);
        let ElementosAsegurados1 = new ElementosAsegurados(elementoAsegurado, monto, total);
        lista_seguros.push(ElementosAsegurados1);
    }

     // Ultimo dato cargado de la Lista
    let datoLista = lista_seguros[lista_seguros.length - 1];

    let tabla = document.getElementById("tabla");

    // Insertar fila dentro de la tabla
    let fila = tabla.insertRow();

    // Insertar celdas en la fila
    let celdaElemento = fila.insertCell();
    let celdaMonto = fila.insertCell();
    let celdaTotal = fila.insertCell();

    // Insertar los valores dentro de las celdas de la tabla
    celdaElemento.innerHTML = datoLista.elementoAsegurado;
    celdaMonto.innerHTML = "$" + datoLista.monto;
    celdaTotal.innerHTML = "$" + datoLista.total;

    // Ir hasta el final del html

    let footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth", block: "end" });
}


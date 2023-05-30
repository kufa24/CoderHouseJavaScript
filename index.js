/* 

Apenas se abre el primer propmt ingresan Salir, luego F5 y a partir de ahi funciona como deberia. Hasta que no ingresen Salir y despues F5 no va a mostrar nada en consola.

Saludos.-

*/

console.log("¡Bienvendio a Seguros Tusam!");
console.log("");
console.log("A continuacion, calcularemos el valor de tu seguro...");
console.log("");

// FUNCIONES

function calcular_auto( monto ){
    suma_asegurada = parseFloat(monto);
    suma_asegurada = suma_asegurada - (suma_asegurada * 0.85);
    return suma_asegurada
}

function calcular_moto( monto ){
    suma_asegurada = parseFloat(monto);
    suma_asegurada = suma_asegurada - (suma_asegurada * 0.80);
    return suma_asegurada
}
function calcular_bicicleta( monto ){
    suma_asegurada = parseFloat(monto);
    suma_asegurada = suma_asegurada - (suma_asegurada * 0.75);
    return suma_asegurada
}
function calcular_lancha( monto ){
    suma_asegurada = parseFloat(monto);
    suma_asegurada = suma_asegurada - (suma_asegurada * 0.70);
    return suma_asegurada
}

function valor_descuento (valor, descuento){
    let valor_final;
    if(descuento === "Si"){
        valor_final = valor - (valor * 0.10);
    } else{
        valor_final = valor;
    }
    return valor_final;
}

//OBJETOS

class ElementosAsegurados {

    constructor(objeto_asegurado, monto, total){
        this.objeto_asegurado = objeto_asegurado;
        this.monto = monto;
        this.total = total;
    }
    datosSeguros(){
        console.log("----> DATOS DE SEGURO SOLICITADO <----")
        console.log("Objeto a Asegurar: ", this.objeto_asegurado);
        console.log("Valor ingresado: $", this.monto);
        console.log("Monto a Pagar: $", this.total);
    }
}

// LISTAS

let lista_seguros = [];

// BUCLE PROMPT --> SOLICITUD DE DATOS PARA CALCULAR VALOR DEL SEGURO

let ingreso = "";

while( ingreso != "Salir"){
    
    ingreso = prompt("Escriba una de las siguientes opciones: Seguros / Salir");
    
    if(ingreso === "Seguros"){
        
        let objeto_asegurado = prompt("Escriba que desea asegurar: Auto / Moto / Bicicleta / Lancha");
        
        let monto = parseFloat(prompt("Ingrese el monto a asegurar(solo numeros): "));
        
        if(objeto_asegurado === "Auto"){
            
            let valor_cuota_auto = calcular_auto( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_auto, descuento);

            let ElementosAsegurados1 = new ElementosAsegurados(objeto_asegurado, monto, total);
            
            lista_seguros.push(ElementosAsegurados1);

            ElementosAsegurados1.datosSeguros();
            
        } else if(objeto_asegurado === "Moto"){
            
            let valor_cuota_moto = calcular_moto( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_moto, descuento);
            
            let ElementosAsegurados1 = new ElementosAsegurados(objeto_asegurado, monto, total);
            
            lista_seguros.push(ElementosAsegurados1);

            ElementosAsegurados1.datosSeguros()
            
        } else if(objeto_asegurado === "Bicicleta"){
            
            let valor_cuota_bicicleta = calcular_bicicleta( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_bicicleta, descuento);
            
            let ElementosAsegurados1 = new ElementosAsegurados(objeto_asegurado, monto, total);
            
            lista_seguros.push(ElementosAsegurados1);

            ElementosAsegurados1.datosSeguros()
            
        } else if(objeto_asegurado === "Lancha"){
            
            let valor_cuota_lancha = calcular_lancha( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_lancha, descuento);
            
            let ElementosAsegurados1 = new ElementosAsegurados(objeto_asegurado, monto, total);
            
            lista_seguros.push(ElementosAsegurados1);

            ElementosAsegurados1.datosSeguros()
            
        } else{
            console.log("Dato Incorrecto");
        }
    }else if(ingreso === "Salir"){
        console.log("¡HASTA LA PROXIMA!");
    } else{
        console.log("Dato Incorrecto");
    }
    console.log("¡FINALIZADO!");
    console.log("");
}

// MUESTRA TOTAL FINAL

console.log("A continuacion le mostraremos la suma total a abonar por mes de sus seguros:")

let sumatoriaTotal = lista_seguros.reduce((acumulador, elemento) => acumulador  + elemento.total, 0);

console.log("Suma total a Abonar: $ ", sumatoriaTotal);
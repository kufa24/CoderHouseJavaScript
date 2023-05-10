/* 

Quiero aclarar que nose porque pero hace 2 dias vengo renegando con que si la primera vez que abro el archivo .html desde el navegador, si no le ingreso "Salir", no me mestra nada en consola.
Busque por todos lados y no veo mi error. Llegue a preguntarle a ChatGPT, le pase todo el codigo y me dice que esta bien. Pero me pasa eso. Si encuentran la solucion pasenmela porfis.

Pd: Apenas se abre el primer propmt ingresan Salir, luego F5 y a partir de ahi funciona como deberia. Hasta que no ingresen Salir y despues F5 no va a mostrar nada en consola.

Saludos.-

*/

// Seguros

console.log("¡Bienvendio a Seguros Tusam!");

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

function valor_descuento (valor, descuento){
    let valor_final;
    if(descuento === "Si"){
        valor_final = valor - (valor * 0.10);
    } else{
        valor_final = valor;
    }
    return valor_final;
}

let ingreso = "";

while( ingreso != "Salir"){
    
    ingreso = prompt("Escriba una de las siguientes opciones: Seguros / Salir");

    console.log("Usted ingreso: ", ingreso);
    
    if(ingreso === "Seguros"){
        
        let objeto_asegurado = prompt("Escriba que desea asegurar: Auto / Moto");
        
        console.log("Usted ingreso: ", objeto_asegurado);
        
        let monto = prompt("Ingrese el monto a asegurar(solo numeros): ");
        
        console.log("Usted ingreso: $", monto);
        
        if(objeto_asegurado === "Auto"){
            
            let valor_cuota_auto = calcular_auto( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_auto, descuento);
            
            console.log("La cuota mensula del seguro de su auto seria: $", total);
            
        } else if(objeto_asegurado === "Moto"){
            
            let valor_cuota_moto = calcular_moto( monto );
            
            let descuento = prompt("¿Usted cuenta con una flota de seguros? Ingrese Si o No");
            
            let total = valor_descuento(valor_cuota_moto, descuento);
            
            console.log("La cuota mensula del seguro de su moto seria: $", total);
            
        } else{
            console.log("Dato Incorrecto");
        }
    }else if(ingreso === "Salir"){
        console.log("¡HASTA LA PROXIMA!");
    } else{
        console.log("Dato Incorrecto");
    }

    console.log("¡FINALIZADO!");
}















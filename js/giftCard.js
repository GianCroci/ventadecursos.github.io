let nombreDestinatario= document.querySelector("#nombre");

nombre.addEventListener("keyup", ()=>{
    document.querySelector(".destinatario_modificado").innerHTML=nombre.value;
})

/*************************************************************** */
let colorDeTexto= document.querySelector(".container_texto_de_giftcard");

let botonTextoNegro= document.getElementById("color_negro");
let botonTextoBlanco= document.getElementById("color_blanco");
let botonTextoRojo= document.getElementById("color_rojo");
let botonTextoAzul= document.getElementById("color_azul");

botonTextoNegro.addEventListener("click", function(e){
    colorDeTexto.classList.remove("blanco","rojo","azul")
    colorDeTexto.classList.add("negro");
});
botonTextoBlanco.addEventListener("click", function(e){
    colorDeTexto.classList.remove("negro","rojo","azul")
    colorDeTexto.classList.add("blanco");
});
botonTextoRojo.addEventListener("click", function(e){
    colorDeTexto.classList.remove("blanco","negro","azul")
    colorDeTexto.classList.add("rojo");
});
botonTextoAzul.addEventListener("click", function(e){
    colorDeTexto.classList.remove("blanco","rojo","negro")
    colorDeTexto.classList.add("azul");
});
/*************************************************************** */

let tamañoDeFuente= document.querySelector(".container_texto_de_giftcard");

let botonTamañoDeFuente28px= document.querySelector("#tamañoDeFuente_28");
let botonTamañoDeFuente36px= document.querySelector("#tamañoDeFuente_36");
let botonTamañoDeFuente42px= document.querySelector("#tamañoDeFuente_42");

botonTamañoDeFuente28px.addEventListener("click",function(e){
    tamañoDeFuente.classList.remove("tamaño36px","tamaño42px");
    tamañoDeFuente.classList.add("tamaño28px");
})
botonTamañoDeFuente36px.addEventListener("click",function(e){
    tamañoDeFuente.classList.remove("tamaño28px","tamaño42px");
    tamañoDeFuente.classList.add("tamaño36px");
})
botonTamañoDeFuente42px.addEventListener("click",function(e){
    tamañoDeFuente.classList.remove("tamaño36px","tamaño28px");
    tamañoDeFuente.classList.add("tamaño42px");
})
/*************************************************************** */
 let montoGiftCard= document.getElementById("monto");

monto.addEventListener("keyup", ()=>{
    document.querySelector(".valor_GiftCard").innerHTML=("$ ")+monto.value;
})

/*************************************************************** */

let posicionMonto= document.querySelector(".valor_GiftCard");

let posicion1= document.getElementById("Ubicacion_1");
let posicion2= document.getElementById("Ubicacion_2");
let posicion3= document.getElementById("Ubicacion_3");
let posicion4= document.getElementById("Ubicacion_4");

posicion1.addEventListener("click",function(e){
    posicionMonto.classList.remove("posicion2","posicion3","posicion4")
    posicionMonto.classList.add("posicion1")
})
posicion2.addEventListener("click",function(e){
    posicionMonto.classList.remove("posicion1","posicion3","posicion4")
    posicionMonto.classList.add("posicion2");
})
posicion3.addEventListener("click",function(e){
    posicionMonto.classList.remove("posicion1","posicion2","posicion4")
    posicionMonto.classList.add("posicion3");
})
posicion4.addEventListener("click",function(e){
    posicionMonto.classList.remove("posicion1","posicion2","posicion3")
    posicionMonto.classList.add("posicion4");
})

/*************************************************************** */
/*la variable que quiero modificar visualmente*/
let fondoDeGiftcard= document.querySelector(".container_texto_de_giftcard");

/*los botones que selecciono */
let botonFondoNegro= document.getElementById("fondo_negro");
let botonFondoBlanco= document.getElementById("fondo_blanco");
let botonFondoAzul= document.getElementById("fondo_azul");
let botonFondoRojo= document.getElementById("fondo_rojo");

/*le doy funcionalidad a los botones */
botonFondoNegro.addEventListener("click", function(e){
    fondoDeGiftcard.classList.remove("fondo_giftCard_blanco","fondo_giftCard_azul","fondo_giftCard_rojo")
    fondoDeGiftcard.classList.add("fondo_giftCard_negro");
})
botonFondoBlanco.addEventListener("click", function(e){
    fondoDeGiftcard.classList.remove("fondo_giftCard_negro","fondo_giftCard_azul","fondo_giftCard_rojo")
    fondoDeGiftcard.classList.add("fondo_giftCard_blanco");
})
botonFondoAzul.addEventListener("click", function(e){
    fondoDeGiftcard.classList.remove("fondo_giftCard_blanco","fondo_giftCard_negro","fondo_giftCard_rojo")
    fondoDeGiftcard.classList.add("fondo_giftCard_azul");
})
botonFondoRojo.addEventListener("click", function(e){
    fondoDeGiftcard.classList.remove("fondo_giftCard_blanco","fondo_giftCard_azul","fondo_giftCard_negro")
    fondoDeGiftcard.classList.add("fondo_giftCard_rojo");
})

/**************************VALDIDACIONES**************************************/

let form= document.querySelector("#form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();
})

function validar(){
    let error= false;
    let mensajeDeError= "";
    let nombre=document.querySelector("#nombre").value;
    let monto= document.querySelector("#monto").value;

    if(nombre==""){
        error=true;
        mensajeDeError+="<p>Campo NOMBRE es obligatorio.</p>";
    }
    if(monto>10000 || monto<0 || monto==""){
        error=true;
        mensajeDeError+="<p>Campo monto es obligatorio ingrese un valor entre 0 y 10000";
    }
    if(error){
        document.querySelector("#mensaje").innerHTML=mensajeDeError;
    }else{
        document.querySelector(".nombre_giftcard").innerHTML = document.getElementById("nombre").value + " por el valor de: $" + document.getElementById("monto").value;
        document.querySelector(".modal").classList.add("visible")

        setTimeout(() => {
            
            form.submit();
            
          }, 3000);
       /* form.submit();*/
    }
}
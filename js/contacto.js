let form= document.querySelector(".formulario_contacto");
let textarea=document.querySelector("#descripcion");
let contador= document.querySelector(".contador_carac")

textarea.addEventListener("keypress", (e)=>{
    contador.innerHTML=textarea.value.length+ "/1000";
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();
})

function validar(){
    let error= false;
    let mensajeDeError= "";
    let nombre=document.querySelector("#nombre").value;
    let email= document.querySelector("#email").value;
    let numero=document.querySelector("#numeroDeContacto").value;
    let caracteres= document.querySelector("#descripcion").value;
    var ExpReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido=ExpReg.test(email);
    
    if(nombre==""){
        error=true;
        mensajeDeError+="<p>*Nombre y apellido es obligatorio.</p>";
    }
    if(email=="" || esValido!=true){
        error=true;
        mensajeDeError+="<p>*Email es invalido.</p>"
    }
    if(numero=="" || numero.length!=10){
        error=true;
        mensajeDeError+="<p>*Numero es obligatorio. Debe ingresar 10 caracteres</p>"
    }
    if(caracteres.length>1000){
        error= true;
        mensajeDeError+="<p>*Cantidad de caracteres superada.Maximo 1000</p>"
    }
    if(error){
        document.querySelector("#mensaje").innerHTML=mensajeDeError;
    }else{
        
        document.querySelector(".popup").classList.remove("d-none");
        
          setTimeout(() => {
            
            form.submit();
          }, 3000);
        }  
}

function contarLetras(){

    var valor =document.querySelector("#descripcion");
    var cantidad= valor.value.length;

    document.querySelector(".contador_carac").innerHTML=cantidad+ "/1000";
}


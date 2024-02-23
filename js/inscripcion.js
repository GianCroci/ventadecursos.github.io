let form = document.querySelector(".formulario");
let popup = document.querySelector(".popup");
var personasAgregadas = 1;
var nombres = "";

/*let guardarDatos = function(){
  let botonEnviar = document.querySelector(".enviar");

  botonEnviar.addEventListener("click", ()=>{
      
      

    
       let nombre = document.querySelectorAll(".nombre");
       
       nombre.forEach((item)=>{
        nombres += item.value + ". "
       })
       
   
    document.querySelector(".usuariosInscriptos").innerHTML = nombres;


  })
}*/





let nuevo = function() {
    $("<div/>").insertBefore("[name='agregar']")
                   .append($(".inputs").html())
                   .find("button")
                   .attr("onclick", "eliminar(this)")
                   .text("Eliminar");
                   personasAgregadas++;
                    sumarImporte();
  }
  
let eliminar = function(obj) {
  $(obj).closest("div").remove();
  personasAgregadas--;
  sumarImporte();
}



function enviarFormulario(){
let error = false;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
        let mensajesError="";
        let nombre = document.querySelectorAll(".nombre");
        let dni = document.querySelectorAll(".dni");
        let telefono = document.querySelectorAll(".telefono");
        let mensajeNombre = false;
        let mensajeDni = false;
        let mensajeTelefono = false;
        
        nombre.forEach((item)=>{
           if(item.value.length<3){
            error=true;
           if(mensajeNombre==false){
            mensajesError += "<p>El campo nombre y apellido debe tener mas de 3 letras</p>";
           }
            mensajeNombre = true;
        } 
        })
        
        dni.forEach((item)=>{
            if(item.value.length!=8){
            error=true;
            if(mensajeDni == false){
              mensajesError += "<p>El dni es incorrecto, debe tener 8 caracteres</p>";
            }
            mensajeDni = true;
        }
        })
        
        telefono.forEach((item)=>{
            if(item.value.length!=10){
                error=true;
                if(mensajeTelefono == false){
                  mensajesError += "<p>El telefono es incorrecto, debe tener 10 numeros</p>";
                }
                mensajeTelefono = true;
            }
        })
        
        
        if(error){
            e.preventDefault();
            document.querySelector(".mensaje").innerHTML=mensajesError;
        }

        if(mensajeNombre==false&&mensajeDni==false&mensajeTelefono==false){
          /*guardarDatos();*/
          let nombre = document.querySelectorAll(".nombre");
       
       nombre.forEach((item)=>{
        nombres += item.value + ". "
       })
       
   
        document.querySelector(".usuariosInscriptos").innerHTML = nombres;
        popup.classList.remove("d-none")

          setTimeout(() => {
            
            form.submit()
            sessionStorage.clear()
            window.location.href = "index.html";
          }, 4000);
        }  
   

  })
}



function importeFinal(){
    const productos = JSON.parse(sessionStorage.getItem('productos'));

    document.querySelector(".importe_final").innerHTML = "$ ";
    let total = 0;
    for (prod in productos) {
        total += productos[prod].precio * productos[prod].cantidad;
    }
    document.querySelector(".importe_final").innerHTML += total;
}
    
function sumarImporte(){
const productos = JSON.parse(sessionStorage.getItem('productos'));

let total = 0;
for (prod in productos) {
    total += productos[prod].precio * productos[prod].cantidad;
}
document.querySelector(".importe_final").innerHTML ="$ " + total*personasAgregadas;
}


function limpiarCampo(){
  
      form.reset();
  
}

function eliminarCursoDelCarrito(){

  addEventListener("click", (e) => {

  if (e.target.classList.contains("fa-trash-can")) {

      
      productosFiltrados = [];
      const productos = JSON.parse(sessionStorage.getItem('productos'));
      productosFiltrados = [];
      console.log("productos")
      console.log(productos);
      for (prod in productos) {
          if ( productos[prod].id !== parseInt(e.target.id, 10) ) {
              productosFiltrados.push(productos[prod]);
          }
      }
      /*console.log("productos filtrados")
      console.log(productosFiltrados)*/
      sessionStorage.setItem('productos', JSON.stringify(productosFiltrados));

      sumarImporte();
      armarCarrito();
      init();
      

      const productosStorageLength = JSON.parse(sessionStorage.getItem('productos')).length;
      if(productosStorageLength==0){
          document.querySelector(".boton_pagar").classList.add("d-none");
      }

  }
});

}   


importeFinal();

enviarFormulario();
  

 
  













  /* let formulario = document.querySelector(".formulario");
    let botonAgregarPersona = document.querySelector(".icono_container")
    let form = document.querySelector(".formulario");
    var personasAgregadas = 1;
    let botonEliminarPersona = document.querySelector(".container_menos");



   function validarFormulario(){

        
        

    form.addEventListener("submit",(e)=>{
        let error = false;
        let mensajesError="";
        let nombre = document.querySelectorAll(".nombre");
        let dni = document.querySelectorAll(".dni");
        let telefono = document.querySelectorAll(".telefono");
        
        nombre.forEach((item)=>{
           if(item.value.length<3){
            error=true;
            mensajesError += "<p>El campo nombre y apellido debe tener mas de 3 letras</p>";
        } 
        })
        
        dni.forEach((item)=>{
            if(item.value.length!=8){
            error=true;
            mensajesError += "<p>El dni es incorrecto, debe tener 8 caracteres</p>";
        }
        })
        
        telefono.forEach((item)=>{
            if(item.value.length!=10){
                error=true;
                mensajesError += "<p>El telefono es incorrecto, debe tener 10 numeros</p>";
            }
        })
        
        
        if(error){
            e.preventDefault();
            document.getElementById("mensaje").innerHTML=mensajesError;
        }
        else{
            form.submit();
        }
       
    });
   }
    
            
   validarFormulario();
    










   
    let limpiarCampos = document.getElementById("limpiar");
    limpiarCampos.addEventListener("click", ()=>{
        document.querySelector(".formulario").reset();
    })
    
    importeFinal();

    let nuevo = function() {
        $("<section/>").insertBefore("[name='agregar']")
                       .append($(".inputs").html())
                       .find("button")
                       .attr("onclick", "eliminar(this)")
                       .text("Eliminar");
                       personasAgregadas++;
                       sumarImporte();
      }
      
    let eliminar = function(obj) {
        $(obj).closest("section").remove();
        personasAgregadas--;
      }
 
   function importeFinal(){
        const productos = JSON.parse(sessionStorage.getItem('productos'));
    
        document.querySelector(".importe_final").innerHTML = "$ ";
        let total = 0;
        for (prod in productos) {
            total += productos[prod].precio * productos[prod].cantidad;
        }
        document.querySelector(".importe_final").innerHTML += total;
    }
        
function sumarImporte(){
    const productos = JSON.parse(sessionStorage.getItem('productos'));

    let total = 0;
    for (prod in productos) {
        total += productos[prod].precio * productos[prod].cantidad;
    }
    document.querySelector(".importe_final").innerHTML ="$ " + total*personasAgregadas;
}
*/



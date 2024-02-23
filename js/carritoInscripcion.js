function init() {
    const productosStorageLength = JSON.parse(sessionStorage.getItem('productos')).length;
    document.querySelector(".contador").innerHTML = productosStorageLength;
            

}


function armarCarrito() {
    const productos = JSON.parse(sessionStorage.getItem('productos'));
    const productosStack = [];
    productos.forEach((producto) => {
        const productoStack = productosStack.find((p) => p.id === producto.id);
        if (productoStack) {
            productoStack.cantidad ++;
        } else {
            productosStack.push(producto);
        }
    });

    const tabla = document.getElementById("tabla");
    const productosStorageLength = JSON.parse(sessionStorage.getItem('productos')).length;
    if(productosStorageLength==0){
            
        tabla.innerHTML = "Todavia no se seleccionaron cursos"
        
    }
    
    if(productosStorageLength!=0){

        

        tabla.innerHTML = 
        `<tr>
          <th class="th_titulo">PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th>SUBTOTAL</th>
          <th class="empty"></th>
        </tr>`

    for(prod in productosStack) {

        tabla.innerHTML += 
        `<tr>
            <td class="img-carrito">
            <img src="`+ productosStack[prod].src +`" alt="" />
            </td>
            <td>`+ productosStack[prod].cantidad +`</td>
            <td>`+ productosStack[prod].precio +`</td>
            <td>`+ productosStack[prod].precio * productosStack[prod].cantidad  +`</td>
            <td class="edit-buttons" onclick="eliminarCursoDelCarrito();">
            <i class="fa-solid fa-trash-can" id="`+ productosStack[prod].id +`"></i>
            </td>
        </tr>`
    }
    tabla.innerHTML += 
        `<tr>
          <th></th>
          <th></th>
          <th></th>
          <th class="total"></th>
          <th></th>
        </tr>`
    calcularTotales(productosStack);
   /* const productosStorageLength = JSON.parse(sessionStorage.getItem('productos')).length;
    
    if(productosStorageLength>0){
        document.querySelector(".frase_a_borrar").classList.add("d-none");
    }*/
    
    init()

    }

    document.querySelector(".boton_pagar").classList.remove("d-none");
    document.querySelector(".frase_a_borrar").classList.add("d-none");
    if(productosStorageLength==0){
        document.querySelector(".boton_pagar").classList.add("d-none");
    }
    
}

function agregarAlCarrito(producto) {
    const productos = [];
    const productosStorage = sessionStorage.getItem('productos');
    if (productosStorage) {
        productos.push(...JSON.parse(productosStorage));
    }
    productos.push(producto);
    sessionStorage.setItem('productos', JSON.stringify(productos));
    document.querySelector(".contador").innerHTML = productos.length;
    
    armarCarrito();
}
function agregarAlCarritoSinActualizar(producto) {
    const productos = [];
    const productosStorage = sessionStorage.getItem('productos');
    if (productosStorage) {
        productos.push(...JSON.parse(productosStorage));
    }
    productos.push(producto);
    sessionStorage.setItem('productos', JSON.stringify(productos));
    document.querySelector(".contador").innerHTML = productos.length;
    
    armarCarrito();   
    setTimeout(() => {
            
        window.location.href = "inscripcion.html";
      }, 2000);
    }  
    

    
function calcularTotales (productos){
    document.querySelector(".total").innerHTML = "TOTAL: $ ";
    let total = 0;
    for (prod in productos) {
        total += productos[prod].precio * productos[prod].cantidad;
    }
    document.querySelector(".total").innerHTML += total;
}  

init();
armarCarrito();
eliminarCursoDelCarrito();
/*-------------------------------------------Listado del carrito----------------------------------------*/
/*function carrito(){
    let contador = document.querySelector(".contador");
if(productos.length==0){
    document.getElementById("tabla").classList.add("d-none");
}
if(productos.length>0){
    let parrafo = document.querySelector(".parrafo")
    document.getElementById("tabla").classList.remove("d-none");
    document.querySelector(".carrito").parentNode.appendChild(parrafo)
}
}*/




/*---------------------------------------------------------Eliminar Curso del carrito-----------------------------------*/





/*-------------------------------------------------Funcion de calcular total del precio--------------------------------*/



/*let botonComprar = document.querySelectorAll(".boton_comprar")
botonComprar.forEach((item)=>{
    item.addEventListener("click", ()=>{
        window.location.reload()
    })
})*/


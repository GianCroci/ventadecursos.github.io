




let popupCarrito = document.querySelector(".carrito_container")

popupCarrito.addEventListener("click", ()=>{
    document.querySelector(".carrito_popup").classList.toggle("d-none");
    
})

let botonInscribirse = document.querySelectorAll(".inscribirse")

botonInscribirse.forEach((item)=>{
item.addEventListener("click", ()=>{
    document.querySelector(".modal").classList.add("visible")
})
})

document.querySelector(".js-close-modal").addEventListener("click", ()=>{
    document.querySelector(".modal").classList.remove("visible")
    window.location.reload()


})





    



  
  
  
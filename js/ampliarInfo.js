export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,titulo:event.target.parentElement.querySelector("h4").textContent, precio:event.target.parentElement.querySelector("h3").textContent, descripcion:event.target.parentElement.querySelector("p").textContent, titulo:event.target.parentElement.querySelector("h4").textContent,
        }
      //  console.log(producto)
        // asociando valores al modal
        let foto=document.getElementById("fotoinformacion")
        foto.src=producto.foto
        let titulo=document.getElementById("nombreinformacion")
        titulo.textContent=producto.titulo
        let descripcion=document.getElementById("infoproducto")
        descripcion.textContent=producto.descripcion
        let precio=document.getElementById("precioproducto")
        precio.textContent=producto.precio
        precio.classList.add("colorpre")

        

        
        return producto
    
        
    }
   
    
    


}
import { llenarTienda } from "./llenarTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"




let producto={}

llenarTienda()


let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        let modalinfop = new bootstrap.Modal(document.getElementById('modalinfop'))
        producto=ampliarInformacion(event)
        // console.log(producto)
        
        modalinfop.show()

        let botonadd =document.getElementById("botonadd")
        botonadd.addEventListener("click",function(event){
            if (event.target.classList.contains("btn")){
                modalinfop.hide()

            }
        })
    }
    

})
//detectar accion de añadir al carrito
let carrito=[]

let boton = document.getElementById("botonadd")
boton.addEventListener('click',function(event){
    console.log("estoy añadiendo al carrito")

    let modalinfop = new bootstrap.Modal(document.getElementById('modalinfop'))


    //capturar cantidad
    let cantidad=document.getElementById("cantidadproducto").value 
    producto.cantidad=cantidad
    carrito.push(producto)
    
    //sumar cantidades
    let suma=0
    carrito.forEach(function(producto){
        
        suma=suma+Number(producto.cantidad)
    })

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    
    capsula.classList.remove("invisible")
    

})
//4. ver resumen de venta
let botoncarrito=document.getElementById("botoncarrito")
botoncarrito.addEventListener("click",function(event){
    
    

    let contenedor=document.getElementById("contenedorventa")

    let modalventa = new bootstrap.Modal(document.getElementById('resumencarrito'))
    
    //borrar el html de una seccion 
    contenedor.innerHTML=""
    
    //reccorrer el carrito para pintar la factura
    carrito.forEach(function(producto){
       
        

        //traversing
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4")

        let columna2=document.createElement("div")
        
        columna2.classList.add("col-12","col-md-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.titulo

        /*let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.classList.remove("show2")
        descripcion.textContent=producto.descripcion
        */
        



        //console.log(titulo)

        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.classList.add("colorpre")
        precio.textContent=producto.precio

        let cantidad= document.createElement("h5")
        cantidad.classList.add("text-center")
        
        cantidad.textContent="unidades: "+producto.cantidad
       
        let subtotal= document.createElement("h4")
        subtotal.classList.add("color3")
        let subtotalcompra=producto.cantidad*producto.precio
        subtotal.textContent="Subtotal= COP$ "+subtotalcompra
        producto.subtotal= subtotalcompra

       // let totalpagar=document.createElement("")




        


        //PADRES E HIJOS
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)

        columna2.appendChild(titulo)
      //  columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        
       // columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        columna2.appendChild(subtotal)

        contenedor.appendChild(fila)
        



    })
let suma=0
carrito.forEach(function(producto){
    suma= suma+Number(producto.subtotal)
})

let total=document.getElementById("totalapagar")
total.classList.add("color4")
total.textContent="total = COP$ "+suma

    modalventa.show()
   
})

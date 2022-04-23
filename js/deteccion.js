let productosBD=[
    {nombre:"Invicta Pro Diver",precio:245000,foto:"img/reloj332.jpg"},
    {nombre:"OUPINKE",precio:800000,foto:"img/reloj_022.jpg"},
    {nombre:"aretes de oro con esmeraldas",precio:330000,foto:"img/esmeralda_03.jpg"},
    {nombre:"reloj de lujo",precio:1145000,foto:"img/reloj332211.jpg",},
    {nombre:"esmeraldas",precio:288000,foto:"img/esmeralda_1.jpg"},
    {nombre:"reloj 2022",precio:6054000,foto:"img/reloj3.jpg",},
    {nombre:"cadena de oro",precio:145000,foto:"img/joya_5.jpg"},
    {nombre:"oro 24k",precio:2545000,foto:"img/joya_07.jpg",},
    {nombre:"colgante de lagrima",precio:207000,foto:"img/esmeralda_1.jpg"},
    {nombre:"anillos",precio:4770000,foto:"img/anillo3.jpg"},

]



//Necesito recorrer un arreglo en JS
function llenarTienda(){
    let productosBD=[
        {nombre:"Invicta Pro Diver",precio:245000,foto:"img/reloj332.jpg"},
        {nombre:"OUPINKE",precio:800000,foto:"img/reloj_022.jpg"},
        {nombre:"aretes de oro con esmeraldas",precio:330000,foto:"img/esmeralda_03.jpg"},
        {nombre:"reloj de lujo",precio:1145000,foto:"img/reloj332211.jpg",},
        {nombre:"esmeraldas",precio:288000,foto:"img/esmeralda_1.jpg"},
        {nombre:"reloj 2022",precio:6054000,foto:"img/reloj3.jpg",},
        {nombre:"cadena de oro",precio:145000,foto:"img/joya_5.jpg"},
        {nombre:"oro 24k",precio:2545000,foto:"img/joya_07.jpg",},
        {nombre:"colgante de lagrima",precio:207000,foto:"img/esmeralda_1.jpg"},
        {nombre:"anillos",precio:4770000,foto:"img/anillo3.jpg"},

    ]

    
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")

    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col  crear columna
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100 crear tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top creo la imagen
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        //orZ denar estructura
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
}

llenarTienda()

//1.Creo una variable para almacenar la base sobre la cual voy a pintar


function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,titulo:event.target.parentElement.querySelector("h4").textContent,precio:event.target.parentElement.querySelector("h3").textContent,
        }
        //console.log(producto)

        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let titulo=document.getElementById("info")
        titulo.textContent=producto.titulo
        let precio=document.getElementById("costo")
        precio.textContent=producto.precio

        

        
        
    
        
    }
    
    
    


}


let producto={}




let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    producto=ampliarInformacion(event)
    console.log("producto")
    modalinfoproducto.show()
 
    //console.log(event.target)

})
//detectar accion de añadir al carrito
//carrito arreglo productos= (objetos)
let carrito=[]

let boton = document.getElementById("botonadd")
boton.addEventListener('click',function(evento){
    console.log("añadiendo al carrito")

    //1. capturar cantidad del producto

})




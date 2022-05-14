export function llenarTienda(){
    let productosBD=[
        {nombre:"Invicta Pro Diver",precio:245000,foto:"img/reloj332.jpg",descripcion:"Men Quartz Leather Chronograph Watch and Fashion Bracelet Set Analog Watches for Men Luxury Wristwatch Gifts for Dad Boyfriend"},
        {nombre:"OUPINKE",precio:800000,foto:"img/reloj_022.jpg",descripcion:"Reloj de pulsera para hombre, cronógrafo de cuarzo, acero inoxidable, antioxidante, resistente al agua, perfecto para negocios y uso casual"},
        {nombre:"aretes de oro con esmeraldas",precio:330000,foto:"img/esmeralda_03.jpg",descripcion:"Parade of Jewels - Pendientes colgantes de oro blanco o amarillo de 14 quilates con piedras natales de 0.315 in"},
        {nombre:"reloj de lujo",precio:1145000,foto:"img/reloj332211.jpg",descripcion:"BENYAR - Reloj cronógrafo para hombre, reloj multifunción negro, impermeable, deportivo, a la moda, de cuarzo, reloj de muñeca con correa de acero inoxidable"},
        {nombre:"esmeraldas",precio:288000,foto:"img/esmeralda_1.jpg",descripcion:"Collar con dije Kendra Scott Elisa para mujer, joyería de moda, chapado en oro de 14 quilates"},
        {nombre:"reloj 2022",precio:6054000,foto:"img/reloj3.jpg",descripcion:"Invicta Subaqua Noma III 14501 - Reloj de acero inoxidable chapado en oro de 18 quilates"},
        {nombre:"cadena de oro",precio:145000,foto:"img/joya_5.jpg",descripcion:"FEEL STYLE Cadena de eslabones cubanos para hombre, chapado en oro y plata, collar cubano, cadena de diamantes para hombre, 0.512 in, joyería de hip hop"},
        {nombre:"oro 24k",precio:2545000,foto:"img/joya_07.jpg",descripcion:"The GLD Shop - Collar de cadena cubana Miami de 0.157 in, 18.0 in, 22.0 in, color dorado"},
        {nombre:"colgante de lagrima",precio:207000,foto:"img/esmeralda_1.jpg",descripcion:"colgantes de plata de ley auténtica o de imitación"},
        {nombre:"anillos",precio:4770000,foto:"img/anillo3.jpg",descripcion:"Anillo de plata de ley 925 para mujer, con corazón y rubí, brillante con diamante entero, circonita cúbica, piedra roja, anillo de compromiso de boda, anillo de cóctel para mujer"},

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

        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.classList.add("show2")
        descripcion.textContent=producto.descripcion
        

        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.classList.add("colorpre")
        precio.textContent=producto.precio

       
        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        //orZ denar estructura
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripcion)
        
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
        
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
}
import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js"

let botonRegistro=document.getElementById("botonregistro")
let modalinformativo=new bootstrap.Modal(document.getElementById('modalinformativo'))
let alerta=document.getElementById("alerta")
let formulario=document.getElementById("formularioregistro")
let Icon = document.getElementById("icon")

botonRegistro.addEventListener("click",function(event){
    
  event.preventDefault()

  //CAPTURAR EL VALOR ESCRITO EN LA CAJA CORREO
  let email=document.getElementById("correo").value

  //CAPTURAR EL VALOR ESCRITO EN LA CONTRASEÑA
  let password=document.getElementById("password").value

  const Usuario = document.getElementById("Usuario");

  //ACTIVAR LA RUTINA DE FIREBASE PARA EL REGISTRO
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      //activar un modal de confirmacion del registro
      let textoinformativo=document.getElementById("informaciongeneral")
      let formulario=document.getElementById("formularioregistro")
      formulario.reset()
      textoinformativo.textContent="registro exitoso"
      modalinformativo.show()
      Usuario.innerHTML = email;
      console.log(email);
      icon.classList.remove('Show')
      alerta.textContent="Exito en el registro"
      alerta.classList.add("alert-primary")
      alerta.classList.remove("alert-danger","invisible")
      setTimeout(function(){
          alerta.classList.add("invisible")
          formulario.reset()
      },2000)

  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      let textoinformativo=document.getElementById("informaciongeneral")
      textoinformativo.textContent="registro fallido (-_-)"
      modalinformativo.show()
      //activar un modal que meustre por que fallo el registro
      alerta.textContent="Fallamos en el registro: "+errorMessage
      alerta.classList.add("alert-danger")
      alerta.classList.remove("alert-primary","invisible")
      setTimeout(function(){
        modalinformativo.hide()
      },2000)})


})
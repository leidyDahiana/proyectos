function mostrarDatosUsuario() {
    
  
    let datosUsuario = JSON.parse(localStorage.getItem("data"));     
 
    datos = `Bienvenido ${datosUsuario.name}  `;
       
    document.getElementById("nombreusuario").innerHTML=datos

  
}
mostrarDatosUsuario()



function guardar() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    


    let dataUser = { 'name': nombre, 'email': email, 'edad': edad };
    localStorage.setItem("data", JSON.stringify(dataUser));
}


function mostrarDatos() {
    
    window.location.assign('http://127.0.0.1:5501/index1.html');
  
  
   
}
// Usuario y contraseña 
const usuario = "Usuario";
const contraseña = "Contraseña";


function iniciarSesion() {
    // usuario y contraseña del formulario
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    
    // Issues resuelta 
    if (Username === usuario && Password === contraseña) {
        alert("Inicio de sesión exitoso");
        
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}

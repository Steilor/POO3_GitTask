// Usuario y contraseña 
const usuario = "usuario";
const contraseña = "contraseña";


function iniciarSesion() {
    // usuario y contraseña del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Verificar 
    if (username === usuario && password === contraseña) {
        alert("Inicio de sesión exitoso");
        
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}

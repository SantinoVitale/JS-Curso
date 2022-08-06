const button = document.querySelector(".form_button");
function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let errorLogin = document.getElementById("error");
    if (usuario == "Santino" && password == "Vitale") {
        location.assign("./pages/home.html");
    } else {
        errorLogin.innerHTML = "<h6 style='color: red;'>ERROR! Usuario o contraseña ingresados incorrectamente</h6>"
    }
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
});
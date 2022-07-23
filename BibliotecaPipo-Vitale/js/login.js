function login(usuario, password){
    
    while(usuario != "Santino" && password != "Vitale"){
        usuario = prompt("Ingrese usuario")
        password = prompt("Ingrese contraseña")
        if (usuario == "Santino" && password == "Vitale"){
            alert ("Se logueó correctamente, puede ingresar!")
        } else {
            alert("No se logueó correctamente, verifique nombre y apellido")
        }
    }
    
}

login("", "")



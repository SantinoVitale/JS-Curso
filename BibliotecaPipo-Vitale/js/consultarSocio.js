//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para traer los Socios del localstorage------
const bringSocios = () => {
  clearList();
  for (let i = 0; i < localStorage.length; i++) {
    let traerSocios = JSON.parse(localStorage.getItem("Socio" + i));
    if (traerSocios != null) {
      showSocios(traerSocios);
    }
  }
}

//------Funcion para que muestre los socios-------
const showSocios = (socio) => {
  let consultaStyle = document.querySelector(".consulta_style-orden");
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>Nombre: ${socio.nombre} </li>
                    <li>Apellido: ${socio.apellido} </li>
                    <li>DNI: ${socio.dni} </li>
                    <li>Email: ${socio.email} </li>
                    <li>Teléfono: ${socio.telefono} </li>
                    <li>Domicilio: ${socio.domicilio} </li>
                    <li>Observaciones: ${socio.observaciones} </li>
                </ul>
                </div>`;
  consultaStyle.appendChild(contenedor);
}

//------Funcion para buscar el socio------
const buscarSocio = (e) => {
  let value = e.target.value;
  let Socio = []
  for (let i = 0; i < localStorage.length; i++) {
    let traerSocios = JSON.parse(localStorage.getItem("Socio" + i));
    if (traerSocios != null) {
      Socio.push(traerSocios)
    }
  }

  if (value && value.trim().length > 0) {
    value = value.trim();
    //------Se fija si lo ingresado filtra bien y en caso que no aplica tira mensaje de error mediante una funcion------
    let filtro = Socio.filter(Socios => Socios.nombre.includes(value))
    if (filtro != "") {
      clearList();
      filtro.forEach(array => {
        showSocios(array)
      });
    } else {
      clearList();
      noSocios();
    }

  } else if (value.trim().length == 0) {
    bringSocios();
  } else {
    clearList();
  }
};

//------Funcion por si no hay socios que coincidan con la busqueda------
const noSocios = () => {
  const socios = document.querySelector("#Socios");
  const error = document.createElement("h1");
  error.classList.add("error-message");
  const text = document.createTextNode("No results found.");
  error.append(text);
  socios.append(error);
};

//------Funcion para limpiar la lista de socios------
const clearList = () => {
  const socios = document.querySelector("#Socios");
  while (socios.firstChild) {
    socios.removeChild(socios.firstChild);
  }
};

input.addEventListener("input", buscarSocio);
bringSocios();
console.log("--> Bienvenidos a las Pre-Entrega n° 3 <--");

// DECLARACIÓN DE VARIABLES CON DOM PARA CADA UNO DE LOS FIELDS DEL FORMULARIO DE SING UP
let name = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let userName = document.getElementById("userName");
let city = document.getElementById("city");
//--> Creo lista de paises en option desde el DOM guardadas en LocalStorage en formato JSON 
   let countries= [
    "Canada", 
    "United States of America", 
    "Australia", 
    "United Kingdom", 
    "Japan",
    "Korea",
    ]
    
let selectPaises = document.getElementById ("country")
    for (const oneCountry of countries) {
        let option = document.createElement ("option")
        option.innerHTML = oneCountry;
        selectPaises.appendChild (option);
        
    }
    
    //--seteo en el storage con el formato JSON
    let formatedArray = JSON.stringify(countries)
    localStorage.setItem("countries", formatedArray)
     //--recupero del storage 
    let recuperado = localStorage.getItem("countries")
    console.log("--> La lista de paises recuperados es: ", {
        resultado: recuperado
    });
    
    let revertido = JSON.parse(recuperado)

    console.table(revertido)

// Variables de botones 
let agree = document.getElementById("invalidCheck");
let btn = document.getElementById("submitButton");
let form320 = document.getElementById("form320")

// Variables Summary para mostrar un resumen
let nameSummary = document.getElementById("nameSummary");
let lastNameSummary = document.getElementById("lastNameSummary");
let userNameSummary = document.getElementById("userNameSummary");
let citySummary = document.getElementById("citySummary");
let countrySummary = document.getElementById("countrySummary");


// le agrego todos los eventos a cada uno
name.addEventListener("change", (evento) => {
    console.log("--> El nombre del cliente es: ", evento.target.value);
    nameSummary.innerHTML = evento.target.value
})
lastName.addEventListener("change", (evento) => {
    console.log("--> El apellido del ususario es: ", evento.target.value);
    lastNameSummary.innerHTML = evento.target.value;
})
userName.addEventListener("change", (evento) => {
    console.log("--> El nombre de usuario es: ", evento.target.value);
    userNameSummary.innerHTML = evento.target.value;
})
city.addEventListener("change", (evento) => {
    console.log("--> la ciudad en donde vive el usuario es: ", evento.target.value);
    citySummary.innerHTML = evento.target.value;
})
selectPaises.addEventListener("change", (evento) => {
    console.log("--> El pais en donde vive el usuario es: ", evento.target.value);
    countrySummary.innerHTML = evento.target.value;
})
agree.addEventListener("click", (evento) => {
    console.log("--> El usuario aceptó los terminos y conidiciones", evento.target.value);
})

//Evento submit para obtener los datos del form320 específicamente y que aceptar los términos y condiciones sea obligatorio. 
form320.addEventListener("submit", (event) => {

    event.preventDefault(); //--> usamos esta función para cortar el proceso por default
    console.log("El contenido del primer nombre es: ", name.value);
    console.log("El contenido del apellido es: ", lastName.value);
    console.log("El contenido del nombre de usuario es: ", userName.value);
    console.log("El contenido de ciudad es: ", city.value);
    console.log("El contenido de país es: ", country.value);
    console.log("El usuario ha aceptado los términos y condiciones: ", agree.value);

    // Logaritmo de corte en caso de que no acepte los términos y condiciones

    let hasError = evaluateAgreeConditions(agree)
    return hasError;
});

function evaluateAgreeConditions(agree) {
    if (!agree.checked) {
        alert (' You must agree before submitting.')
    } return false
}





//borro del local storage algunas pruebas que hice 
localStorage.removeItem("primerUsuario"); // como parámetro la clave
localStorage.removeItem("paises"); // como parámetro la clave
localStorage.removeItem("isSold"); // como parámetro la clave
localStorage.removeItem("Edad"); // como parámetro la clave
localStorage.removeItem("Bienvenida"); // como parámetro la clave



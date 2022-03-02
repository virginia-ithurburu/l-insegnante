
class datosLogin {
    constructor(datos_Login) {
        this.email = datos_Login[0];
        this.contraseña = datos_Login[1];
    }
}

//Ingresamos un h5 en el Div que se encuentra dentro del formulario de login del main
$('#ingresar').append(`<h5 class= "bg-info bg-gradient bg-opacity-50 text-center text-dark fw-bold rounded p-3 mb-4">Por favor, ingresa tu email y contraseña para acceder.</h5>`);

//Defino evento para que desaparezca el h5 del div de "Ingresar"
$("#email").on('click', function () {
    $('#ingresar').hide("slow");
});

// Envia los datos de mi Formulario y los guarda en un LocalStorage
function ingresar() {
    var email = $("#email").val();
    var contraseña = $("#password").val();

    if ((email == "") || (!email.includes("@"))) {
        let mensaje = "Error en el ingreso! El campo Email está vacío!";
        document.getElementById("mensaje").innerHTML = `<div id="error1"><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                        </symbol>
                                                        </svg>
                                                        <div id="error" style="display: none" class="alert alert-danger d-flex align-items-center" role="alert">
                                                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                                                        <div >`
                                                            + mensaje +
                                                        `</div>
                                                        </div>
                                                        </div>`;
        $("#error").fadeIn();
        $("#error1").fadeOut(5000);
        return false;
    }

    if (contraseña == "") {
        let mensaje = "Error en el ingreso! El campo contraseña está vacío!";
        $("#mensaje").prepend(`<div id="error2"><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                        </symbol>
                                                        </svg>
                                                        <div id="error" style="display: none" class="alert alert-danger d-flex align-items-center" role="alert">
                                                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                                                        <div>`
                                                            + mensaje +
                                                        `</div>
                                                         </div>
                                                         </div>`);
        $("#error").fadeIn();
        $("#error2").fadeOut(5000);
        return false;
    }

    localStorage.setItem("datos_Login", JSON.stringify([email, contraseña]));
    $("#mensaje").prepend(`<div id="accesoCorrecto"><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                                    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                    </symbol>
                                                    </svg>
                                                    <div style="display: none" id="bienvenido" class="alert alert-success d-flex align-items-center" role="alert">
                                                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                                                    <div>
                                                        Bienvenido! Ha iniciado su sesión.
                                                    </div>
                                                    </div>
                                                    </div>`);
    $("#bienvenido").slideDown("slow");

    
    // Cargamos los datos
    var datos = JSON.parse(localStorage.getItem("datos_Login"));
    var datos_Login = new datosLogin(datos);
    $("#email").val() = datos_Login.email;
    $("#password").val() = datos_Login.contraseña;

    //Borramos los campos
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

 /* TABLA DE ALUMNOS */
//Obtenemos las variables de la tabla y el div del html
let tablaAlumnos = document.getElementById("tablaAlumnos");
let info = document.getElementById("info");
  
  //Clase de Alumnos
  class alumno {
    constructor(legajo, nombreApellido, nota1, nota2, nota3, promedio, estado) {
        this.legajo = legajo;
        this.nombreApellido = nombreApellido;
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
        this.nota3 = parseFloat(nota3);
        this.promedio = parseFloat(promedio);
        this.cargado = false;
        this.estado = estado;
    }
    promediar() { //Calculo para promediar
        this.promedio = (this.nota1 + this.nota2 + this.nota3)/3;
    }
    cargar() { // True/false para cargar a la lista de alumnos
        this.cargado = true;
    }
    calificacion() { //Asignar calificación
        this.estado = this.promedio
        if (this.estado >= "7"){
            this.estado = "APROBADO"
        } else {
            this.estado = "DESAPROBADO"
        }
    }
}
    //Array de Alumnos
const alumnado = [];
    
//Creamos un evento que cargue y almacene alumnos a la tabla
const Cargar = () => {
    let nombreApellido = $("#nombreApellido").val();
    let legajo = $("#legajo").val();
    let notaUno = $("#notaUno").val();
    let notaDos = $("#notaDos").val();
    let notaTres = $("#notaTres").val();
    let estado = $("#calificacion").val();
    
    //Tambien creamos array donde se guarden los datos
    alumnado.push(new alumno(legajo, nombreApellido, notaUno, notaDos, notaTres, promedio, estado));

    let i = 0;
    //Iniciamos el circuito del evento de carga y almacenamiento
    for (const lista of alumnado){
        lista.promediar();
        lista.calificacion();
        
        localStorage.setItem("Nombre", nombreApellido);
        localStorage.setItem("Legajo", legajo);
        localStorage.setItem("NotaUno", notaUno);
        localStorage.setItem("NotaDos", notaDos);
        localStorage.setItem("NotaTres", notaTres);
        localStorage.setItem("Promedio", lista.promedio.toFixed(2));
        localStorage.setItem("Calificacion", lista.estado);
      
        document.getElementById("nombreApellido").value = "";
        document.getElementById("legajo").value = "";
        document.getElementById("notaUno").value = "";
        document.getElementById("notaDos").value = "";
        document.getElementById("notaTres").value = "";

        var nya = localStorage.getItem("Nombre");
        var l = localStorage.getItem("Legajo");
        var nu = localStorage.getItem("NotaUno");
        var nd = localStorage.getItem("NotaDos");
        var nt = localStorage.getItem("NotaTres");
        var p = localStorage.getItem("Promedio");
        var c = localStorage.getItem("Calificacion");

        let contenedor = document.createElement("tr");
        contenedor.id = "fila_" + i;

        contenedor.innerHTML = `<td class="col-1"> ${l} </td>
                                <td class="col-3"> ${nya}</td>
                                <td class="col-1"> ${nu}</td>
                                <td class="col-1"> ${nd}</td>
                                <td class="col-1"> ${nt}</td>
                                <td class="col-1"> ${p}</td>
                                <td><span class="badge rounded-pill bg-secondary"> ${c} </span></td>
                                <td><button type="button" onclick="Eliminar(${i});" class="btn-close btn-close-dark" aria-label="Close"></button></td>`;
        tablaAlumnos.appendChild(contenedor);
        i++;
    }
}
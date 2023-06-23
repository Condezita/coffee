function verTablas(turnoElegido, generoElegido, mtzAlumnos) {
    var tabla = "<table><tr><th>ID</th><th>Nombre y Apellido</th><th>Género</th></tr>";

    // Filtrar alumnos según los criterios seleccionados
    var alumnosFiltrados = mtzAlumnos.filter(function (alumno) {
        return (
            (generoElegido === "" || alumno[4] === generoElegido) &&
            (turnoElegido === "" || alumno[3] === turnoElegido)
        );
    });

    // Generar filas de la tabla con los alumnos filtrados
    alumnosFiltrados.forEach(function (alumno) {
        tabla += "<tr><td>" + alumno[0] + "</td><td>" + alumno[1] + " " + alumno[2] + "</td><td>" + alumno[4] + "</td></tr>";
    });

    tabla += "</table>";

    document.getElementById("marco").innerHTML = tabla;
}

function handleSelectChange() {
    var generoElegido = document.getElementById("generoSelect").value;
    var turnoElegido = document.getElementById("turnoSelect").value;

    if (generoElegido !== "" && turnoElegido !== "") {
        verTablas(turnoElegido, generoElegido, alumnos);
    } else {
        document.getElementById("marco").innerHTML = "";
    }
}

function borrarMarco() {
    document.getElementById("marco").innerHTML = "";
}

// Ejecutar la función para mostrar el resultado inicial
handleSelectChange();

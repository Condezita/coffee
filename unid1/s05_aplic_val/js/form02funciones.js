function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == ""|| /^\s+$/.test(xNombre)) {
        alert("Escriba nombre");
        return false;
    } 
    let xApellidos = document.getElementById("txtApellidos").value;
    if (xApellidos == ""|| /^\s+$/.test(xNombre)) {
        alert("Escriba apellido");
        return false;
    }
    return false;
}   

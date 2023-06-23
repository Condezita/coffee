const fnValidar10 = () => {
    const fnValidar01 = () => {
        let xTexto = document.getElementById("textNombreApellidos").value;
        if(xTexto == ""||/^\ s+$/.test(xTexto)) {
            alert("falta NOMBRE y APELLIDOS");
            return false;
        }
        let xNumero = document.getElementById("txtEdad").value;
        if(xNumero==""){
            alert("Falta EDAD...");
            return false;
        }
        let elementoPref = document.getElementsByName("chkPrefer");
        let valorElegidoPreferencia = "";
        let eligioPreferencia = false;
        for (let i=0; i < elementoPref.length; i++) {
            if(elementoPref[i].checked) {
                valorElegidoPreferencia = elementoPref[1].value;
                eligioPreferencia = true;
            }
        }
        if(!eligioPreferencia){
            alert("Elija UNA PREFERENCIA...");
            return false;
    } else{ 
        alert("Su preferencia elegida es " + valorElegidoPreferencia);
    }
    
    // Caso contrario ///
    
    return true;
    }

}
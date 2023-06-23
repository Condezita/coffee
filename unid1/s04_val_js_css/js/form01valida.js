const fnValidar01 = () => {
    let xTexto = document.getElementById("textTexto").value;
    if(xTexto == ""||/^\ s+$/.test(xTexto)) {
        alert("falta TEXTO");
        return false;
    }
    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero==""){
        alert("Falta NUMERO...");
        return false;
    }
  

    //caso contrario
	return true;
}
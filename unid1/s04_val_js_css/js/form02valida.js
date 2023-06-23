const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia =="" ||/^\ s+$/.test(xPreferencia)) {
        alert("falta seleccionar PREFERENCIAS...");
        return false;
    }
    let xMes = document.getElementById("lstMes").value;
    if(xMes==""){
        alert("Falta seleccionar MES actual...");
        return false;
    }
  

    //caso contrario
	return true;
}
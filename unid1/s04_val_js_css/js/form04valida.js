const fnValidar04 = () => {
    let elementoPref = document.getElementsByName("chkPrefer[]");
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
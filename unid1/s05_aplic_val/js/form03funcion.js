function fnGenerarTabla(res,num,nom,ape,tur)
{
    document.write(`"Tabla aaaa ${num} demmmm <br>"`);
    document.write(`
    <table border=""1>
	<tr>
		<td id>"tdIzq" COL1-FIL1 nombres: </td>
		<td id>"tdDer" COL2-FIL1 ${nom}</td>
		<td rowspan="3">
			<img src="img/f${nom}.jpg" alt="foto">
	</td>
	</tr>
	<tr>
		<td id>"tdIzq"COL1-FIL2 Apellido: </td>
		<td id>"tdIzq"COL2-FIL2</td>
<!--	<td>COL3-FIL2</td>	-->
	</tr>
	<tr>
		<td>COL1-FIL3</td>
		<td>COL2-FIL3</td>
<!--		<td>COL3-FIL3</td>	-->
	</tr>
	<tr>
		<td colspan="3">COL1-FIL4</td>
<!--	<td>COL2-FIL4</td>
		<td>COL3-FIL4</td>	-->
	</tr>
</table>
    `)
}

function fnTurno(turno)
{

}
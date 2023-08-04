import React, {useState, Fragment} from 'react';

const C07matrizoperaciones = () => {

    const [lista,setLista] = useState([1,2,3,4,5]);
    const [dias, setDias] = useState(["Lunes","Martes","Miercoles","Jueves"]);
    const uniendoArray = [...lista, ...dias];

    const [numero, setNumero] =useState(6);
    const agregarNumero =() => {
        setNumero(numero +1);
        setLista([...lista,numero]);
    }

    const [texto, setTexto] = useState(["Viernes","Sabado","Domingo"]);
    const agregarTexto = () =>{
        setDias([...dias, ...texto]);
    }
  return (
    <Fragment>
        <h3>Lectura de la uniòn de matrices</h3>
        {
            uniendoArray.map((item, index) =>
                <p key={index} >
                    {item} - {index}
                </p>
            )
        }
        <br/>

        <h3>Agregar un valor a un array</h3>
        <button onClick={agregarNumero}>Agregar numero</button>
        {
            lista.map((item, index) =>
                 <p key={index}>
                    {item} - {item}
                 </p>
            )
        }
        <br/>

        <h3>Agregar un texto a un array</h3>
        <button onClick={agregarTexto}>Agregar texto</button>
        {
            dias.map((item, index) =>
                <p key={index}>
                    {item} - {index}
                </p>
            )
        }
        <br/>
    </Fragment>
  );
}

export default C07matrizoperaciones;

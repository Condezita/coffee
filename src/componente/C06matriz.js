import React, { useState, Fragment } from 'react';

const C06matriz = () => {

  const [lista, setLista] = useState([1,2,3,4,5]);
  return (
    <Fragment>
        <h3>1.Lectura sin index y sin html</h3>
        {lista.map((item) => item)}
        <br/>

        <h3>2.Lectura sin index y con html</h3>
        {lista.map((item) => <span> {item} </span>)}
        <br/>

        <h3>3.Listas con index y sin key</h3>
        {
            lista.map((item, index) => 
                <p> {item} </p>
            )
        }
        <br/>

        <h3>4.Listas con index y con key</h3>
        {
            lista.map((item, index) => 
                <p key = {index}>
                    {item} - {index}
                </p>
            )
        }
        <br/>
    </Fragment>
  );
}

export default C06matriz;


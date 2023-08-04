import React, {Fragment} from 'react';

const C05operador = () => {

    const edad= 8; 
    return (
        <Fragment>
            <h3>Operador ternario</h3>
            {edad >= 18? 'Mayor de edad': 'Menor de edad'}
        </Fragment>
    );
}

export default C05operador;
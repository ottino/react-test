import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 5 }) => {

    const [ counter , setCounter ] = useState( value  ); // retorna un arreglo con dos valores []

    // Eventos
    const handleAdd = (e) => {
        setCounter ( counter + 1)
    }

    const handleSubstract = (e) => {
        setCounter ( counter - 1)
    }

    const handleReset = (e) => {
        setCounter ( value )
    }

    return (
        <>
          <h1> CounterApp </h1>
          <h1> { counter } </h1>

          <button onClick={ handleAdd }> +1 </button>
          <button onClick={ handleReset }> Reset </button>
          <button onClick={ ()=>setCounter(value) }> Reset_Op2 </button>
          <button onClick={ handleSubstract }> -1 </button>
        </>
    )

};

CounterApp.protTypes = {
    value: PropTypes.number //.isRequired
};

CounterApp.defaultProps = {
    value: 1234
};

export default CounterApp;
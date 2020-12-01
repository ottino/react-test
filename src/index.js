
import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render( <CounterApp value = { 10 } /> , divRoot );
// ReactDOM.render( <PrimeraApp saludo = "Hola Crack" /> , divRoot );
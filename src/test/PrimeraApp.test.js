import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en componentes de react' , () => {

    // test('debe de mostrar el mensaje "Hola Crack"', () => {

    //     const saludo = 'Hola Crack';

    //     const wrapper = render( <PrimeraApp saludo={ saludo } />);


    // })


    test('debe de mostrar <PrimeraApp /> correctamente' , () => {

        const saludo = 'Hola Crack';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de mostrar el subtitulo enviado por propos', () => {

        const saludo = 'Hola Crack';
        const subTitulo = 'Maxi';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo ={ saludo }
                subtitulo = { subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe(subTitulo);


    });
})
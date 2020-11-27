
import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en base\\02-template-string.js' , ()=> {

    test('getSaludo debe retornar hola maxi', () => {

        const nombre = 'Maxisasdasd';

        const saludo = getSaludo( nombre );

        console.log( saludo );

        expect( saludo ).toBe( 'Hola ' + nombre );

    })


    test('getSaludo debe retornar hola maxi si no hay argumento nombre', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Maxi' );

    })


})
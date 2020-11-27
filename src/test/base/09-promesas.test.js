import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
const { getHeroeByIdAsync } = require("../../base/09-promesas");

describe('Pruebas con promesas' , () =>{

    test('getHeroeByIdAsync de retornar un Heroe async ', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();

            });

    });

    test('debe de obtener un errro si el heroe no existe' , ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch(error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });

    });


})
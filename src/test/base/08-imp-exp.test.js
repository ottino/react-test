import '@testing-library/jest-dom';
import { getHeroeById , getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes' , ()=>{

    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );
        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retornar un heroe por owner', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );
        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );
        expect( heroe.length ).toEqual( 2 );
    })




})
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';



describe('Pruebas en componente CounterApp' , ()=> {

    test('pruebas con el boton reset: colocar valor por defecto con el btn reset', ()=> {

        const wrapper = shallow( <CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('106');
    });

});
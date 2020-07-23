import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp'

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    let wrapper = shallow( <GifExpertApp /> );

    test('Debe de mostrar correctamente el <GifExpertApp />', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de mostrar una lista de categorias', () => {

        const categories = [ 'Dragon Ball', 'Paw Patrol' ];
        wrapper = shallow( <GifExpertApp defaultCategories = { categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
        
    })
    
});

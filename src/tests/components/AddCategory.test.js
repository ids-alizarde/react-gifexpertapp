import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories = { setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories } /> );
    })
    
    test('Debe mostrar correctamente el componenete <AddCategory />', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar el contenido del input', () => {

        const input = wrapper.find( 'input' );
        const value = 'Paw patrol';

        input.simulate( 'change', { target: { value } });

    });

    test('NO debe de mandar la informacion con submit', () => {

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe de llamar el setCategories y limpiar el input', () => {
        
        let value = 'Mazinger Z';
        wrapper.find( 'input' ).simulate( 'change', { target: { value } });
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        value = '';
        // wrapper.find( 'input' ).simulate( 'change', { target: { value } });
        // expect( wrapper.find( 'input' ).text() ).toBe( value );

        expect( wrapper.find( 'input' ).props().value ).toBe ( value );

    });
    
});

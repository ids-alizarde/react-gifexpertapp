import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = 'Un titulo X';
    const url = 'https://localhost/al.com.jpg'
    const wrapper = shallow( <GifGridItem title = { title } url = { url }/> );
    
    test('Debe mostrar correctamente el componente <GifGridItem/>', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de tener un parrafo con el texto', () => {
        
        const parrafo = wrapper.find( 'p' );
        const text = parrafo.text().trim();
        expect( text ).toBe( title );
    });

    test('Debe de mostrar la imagen igual al url y alt de los props', () => {

        const img = wrapper.find( 'img' );
        // console.log( img.html() );
        // console.log( img.props() );
        // console.log( img.props().src );
        // console.log( img.prop( 'src' ) );
        expect( img.props().src ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );

    });

    // Forma 1
    test('Debe de tener la clase animate__rubberBand de Animate.css 1', () => {
        
        const div = wrapper.find( 'div' );
        expect( div.hasClass( 'animate__rubberBand' ) ).toBe( true );

    });

    // Forma 2
    test('Debe de tener la clase animate__rubberBand de Animate.css 2', () => {
        
        const div = wrapper.find( 'div' );
        const className = div.prop( 'className' );
        expect( className.includes( 'animate__rubberBand' ) ).toBe( true );

    });
    
});

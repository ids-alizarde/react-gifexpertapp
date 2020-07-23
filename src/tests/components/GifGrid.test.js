import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'Charly y los numeros';

    test('Debe mostrar el componente <GifGrid/> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }); 

        const wrapper = shallow( <GifGrid category = { category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Titulo X'
        }, 
        {
            id: '123',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Titulo X'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        }); 

        const wrapper = shallow( <GifGrid category = { category } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

    });
    
});

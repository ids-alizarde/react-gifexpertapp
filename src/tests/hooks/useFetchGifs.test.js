import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en nuestro Hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {
       
        // const { data, loading } = useFetchGifs( 'Dragon Ball' );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        expect( loading ).toBeTruthy();
    });
    
    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;


        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    
});
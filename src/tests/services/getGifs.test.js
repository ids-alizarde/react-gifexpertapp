import '@testing-library/jest-dom';
import { getGifs } from '../../services/GetGifs';

describe('Pruebas en getGifs Fetch', () => {

    test('Debe traer 10 elementos', async() => {

        const gifs = await getGifs( 'Paw patrol' );
        expect( gifs.length ).toBe( 10 );

    });

    test('Debe traer 0 elementos', async() => {

        const gifs = await getGifs( '' );
        expect( gifs.length ).toBe( 0 );

    });

});
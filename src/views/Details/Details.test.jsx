import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App.jsx'

const testObj = {
    name: 'test-name',
    photoUrl: 'test-photo',
    hair: 'test-hair',
    weapon: 'test-weapon',
    affiliation: 'test-affilitation',
    profession: 'test-profession',
    first: 'test-first'
}

const server = setupServer(
    rest.get(`https://last-airbender-api.herokuapp.com/api/v1/characters/1`, (req, res, ctx) => {
        return res(
            ctx.json({...testObj})
        );
    }),
);

describe('details view test', () => {

    beforeAll(() =>
        server.listen()
    );

    afterAll(() =>
        server.close()
    );

    it('renders a single character', async () =>{
        render(
            <MemoryRouter initialEntries={['/details/1']}>
                <App/>
            </MemoryRouter>
        );
    
        screen.getByText(/loading.../i);
        await screen.findByText(/test-name/i);
    })
})


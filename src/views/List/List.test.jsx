import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App.jsx'

const testArr = [
    {
        name: 'test-name-1',
        photoUrl: 'test-photo',
        affiliation: 'test-aff',
        _id: 1,
    },
    {
        name: 'test-name-2',
        photoUrl: 'test-photo',
        affiliation: 'test-aff',
        _id: 2,
    }
];

const server = setupServer(
    rest.get(`https://last-airbender-api.herokuapp.com/api/v1/characters`, (req, res, ctx) => {
        return res(
            ctx.json([...testArr])
        );
    }),
);

describe('list view test', () => {

    beforeAll(() =>
        server.listen()
    );

    afterAll(() =>
        server.close()
    );

    it('renders a two characters', async () =>{
        render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );
    
        screen.getByText(/loading.../i);
        await screen.findByText(/test-name-1/i);
        await screen.findByText(/test-name-2/i);
    })
})

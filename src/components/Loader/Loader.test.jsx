import { render, screen } from "@testing-library/react"
import Loader from './Loader.jsx'

it('renders loading component', () => {
    const {container} = render(
        <Loader />
    );

    screen.getByText(/Loading.../i);
    expect(container).toMatchSnapshot();
})
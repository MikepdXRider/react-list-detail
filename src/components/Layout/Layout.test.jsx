import { render } from "@testing-library/react";
import Layout from "./Layout.jsx";

it('renders layout component', () => {
    const {container} = render(
        <Layout />
    )

    expect(container).toMatchSnapshot();
})
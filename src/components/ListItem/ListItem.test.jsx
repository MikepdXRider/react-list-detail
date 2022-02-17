import { render } from "@testing-library/react";
import ListItem from "./ListItem.jsx";

const testObj = {
    charName: 'test-name',
    charPhoto: 'test-photo',
    charAff: 'test-aff',
    charId: 'test-id',
    onClick: jest.fn()
}

it('renders ListItem component', () => {
    const {container} = render(
        <ListItem 
        {...testObj}
        />
    )

    expect(container).toMatchSnapshot();
})
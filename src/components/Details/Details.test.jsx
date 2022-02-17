import { render } from "@testing-library/react"
import DetailCard from "./DetailCard.jsx"
import DetailPill from "./DetailPill.jsx"

const testObj = {
    name: 'test-name',
    photoUrl: 'test-photo',
    hair: 'test-hair',
    weapon: 'test-weapon',
    affiliation: 'test-affilitation',
    profession: 'test-profession',
    first: 'test-first'
}

describe('details presentational component snapshots', () => {
    it('detail card snapshot', () => {
        const {container} = render(
            <DetailCard 
            {...testObj}   
            />
        )

        expect(container).toMatchSnapshot();
    })

    it('detail pill snapshot', () => {
        const {container} = render(
            <DetailPill title='test-title' content={testObj.hair} />
        )

        expect(container).toMatchSnapshot();
    })
})
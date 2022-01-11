import fetch from "cross-fetch";

// STRETCH: Add pagination.
    //  getCharacters could take in a page and quantity(set a default value)
    //  then the fetch can dynamically make a request
    // ** Will need a supporting hook/useEffect somewhere which watches for the page state to change, triggering a new call and setting of data to be rendered.
    
export async function getCharacters() {
    try{
        const res = await fetch(`${process.env.API_URL}`)
        const characters = await res.json();
        return characters.map(character => {
            return {
                charId: character._id,
                charName: character.name,
                charPhoto: character.photoUrl,
                charAffiliation: character.affiliation 
            }
        })
    } catch(err) {
        console.log(err);
        return [];
    }
}

export async function getCharacterById(character_id) {
    try{
        const res = await fetch(`${process.env.API_URL}/${character_id}`);
        return res.json();
    } catch (err) {
        console.log(err);
        return {};
    }
}
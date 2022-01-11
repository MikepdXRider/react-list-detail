// This should be a container component.
// A user can view a list of items (characters, quotes, animals, etc)
// Hosts state, makes calls to API, passes props and functions to presentational components.
// A user can click on an item from the list to view more details about the item
// Declare fn that directs user to the details page with the correct id in the param.
// This should navigate the user to a detail view

import React, { useEffect, useState } from 'react'
import { getCharacters } from '../../services/avatar.js';

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCharacters(){
            const res = await getCharacters();
            setCharacters([...res]);
            setIsLoading(false);
        }

        fetchCharacters();
    }, [])

    return (
        <>
            {
                isLoading
                ? <h3>Loading...</h3>
                : <p>{JSON.stringify(characters)}</p>
            }        
        </>
    )
}

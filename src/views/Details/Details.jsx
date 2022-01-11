// This should be a container component.
// Detail view with a back button to return to the list
// Hosts state, makes calls to API, passes props and functions to presentational components.
// Accesses id in param passed from list view.
// Displays selected list item details.

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/avatar.js';

export default function Details() {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        async function fetchCharacter(){
            const res = await getCharacterById(id);
            setCharacter({...res});
            setIsLoading(false);
        }

        fetchCharacter();
    }, [])

    return (
        <>
            {
                isLoading
                ? <h3>Loading...</h3>
                : <p>{JSON.stringify(character)}</p>
            }        
        </>
    )
}

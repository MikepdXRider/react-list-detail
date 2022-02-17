// This should be a container component.
// Detail view with a back button to return to the list
// Hosts state, makes calls to API, passes props and functions to presentational components.
// Accesses id in param passed from list view.
// Displays selected list item details.

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DetailCard from '../../components/Details/DetailCard.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { getCharacterById } from '../../services/avatar.js';
import styles from './Details.css';

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
            <Link className={styles.link} to='/'>Back to List</Link>
            {
                isLoading
                ? <Loader />
                : <DetailCard 
                    {...character}
                />
            }        
        </>
    )
}

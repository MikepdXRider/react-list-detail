// Presentational component
// Recieves state, props and functions from container component
// Displays summary of a single list item.

import React from 'react'

export default function ListItem({charName, charPhoto, charAff, charId, onClick}) {
    return (
        // will be grid
            // has background
        <article onClick={() => onClick(charId)}>
            <h4>{charName}</h4>
            <img src={`${charPhoto}`} alt={`${charName}`} />
            <p>{charAff}</p>
        </article>
    )
}

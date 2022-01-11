// Presentational component
// Recieves state, props and functions from container component
// Displays selected list item details.

import React from 'react'

export default function DetailCard({ name, photoUrl, hair, weapon, affiliation, profession, first }) {
    return (
        <article>
            <h3>{name}</h3>
            <img src={`${photoUrl}`} alt={`${name}`} />
            <p>Affiliation: {affiliation}</p>
            <p>Hair: {hair}</p>
            <p>Weapon: {weapon}</p>
            <p>Profession: {profession}</p>
            <p>First: {first.length ? first : 'None'}</p>
        </article>
    )
}

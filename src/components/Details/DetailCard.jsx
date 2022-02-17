// Presentational component
// Recieves state, props and functions from container component
// Displays selected list item details.

import React from 'react'
import styles from './Details.css'
import DetailPill from './DetailPill.jsx'

export default function DetailCard({ name, photoUrl, hair, weapon, affiliation, profession, first }) {
    return (
        <section className={styles.detailsContainer}>
            <img className={styles.detailsImage} src={`${photoUrl}`} alt={`${name}`} />
            <div className={styles.detailsContChild}>
                <DetailPill title='name' content={name}/>
                <DetailPill title='prof' content={profession}/>
                <DetailPill title='affiliation' content={affiliation}/>
            </div>
            <div className={styles.detailsContChild}>
                <DetailPill title='weapon' content={weapon}/>
                <DetailPill title='hair' content={hair}/>
                <DetailPill title='first seen' content={first}/>
            </div>
        </section>
    )
}

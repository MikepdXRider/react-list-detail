// Presentational component
// Recieves state, props and functions from container component
// Displays summary of a single list item.

import React from 'react'
import consistentString from '../../utils/consistentString.js'
import styles from './ListItem.css'

export default function ListItem({charName, charPhoto, charAff, charId, onClick}) {
    return (
        // will be grid
            // has background
        <article className={styles.container} onClick={() => onClick(charId)}>
            <img src={`${charPhoto}`} alt={`${charName}`} />
            <div>
                <p className={styles.cardTitle}>{charName}</p>
                    <p 
                    className={styles.cardAff}
                    >
                        {consistentString(charAff)}
                        <span>see more</span>
                    </p>
            </div>
        </article>
    )
}

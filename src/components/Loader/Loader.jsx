import React from 'react'
import styles from './Loader.css'

// comment for github
export default function Loader() {
    return (
        <article className={styles.loaderContainer}>
            <p className={styles.loader}>Loading...</p>
        </article>
    )
}

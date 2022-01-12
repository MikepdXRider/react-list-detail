import React from 'react'
import styles from './Loader.css'

export default function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <p className={styles.loader}>Loading...</p>
        </div>
    )
}

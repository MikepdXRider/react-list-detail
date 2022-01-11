import React from 'react'
import styles from './Details.css'

export default function DetailPill({title, content}) {
    return (
        <div className={styles.pillContainer}>
            <div className={`${styles.pillText} ${styles.pillTitleArea}`}>{title.toUpperCase()}</div>
            <div className={`${styles.pillText} ${styles.pillContentArea}`}>{content && content !=='"' ? content : 'None Listed'}</div>
        </div>
    )
}

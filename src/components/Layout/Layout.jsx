import React from 'react'

export default function Layout({children}) {
    return (
        <>
            <header>
                {/* Maybe a little  */}
                <h1>Avatar List and Details</h1>
            </header>
            <main>
                {children}
            </main>
        </>
        
    )
}

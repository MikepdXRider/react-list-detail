import React from 'react'

export default function Layout({children}) {
    return (
        <>
            <header>
                {/* Maybe a little  */}
                <h1>Avatar</h1>
                <p>The Last Airbender</p>
            </header>
            <main>
                {children}
            </main>
        </>
        
    )
}

import React from 'react'

export default function Header  () {
    return (
        <header>
            <div>
               <div className="row block center">
                    <img src="logo.png" alt="AppLogo" />
                    <h1>
                        VEGES
                    </h1>
                    <a href="#/cart">
                        CartItems
                    </a>
                </div>
            </div>
        </header>
    )
}

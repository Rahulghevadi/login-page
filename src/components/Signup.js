import React from 'react'
import {Link} from 'react-router-dom'

function Signup  () {
    return (
        <div className="Sign-container">
            <div>
            <input placeholder="Name"/>
            </div>
            <div>
                <input placeholder="Mobil"/>
            </div>
            <div>
                <input type="email" placeholder="Enter Email Address"/>
            </div>
            <div>
                <input type="password" placeholder="Enter Password"/>
            </div>
            <div>
                 <button type="submit">Signup</button>
            </div>
            <p> Done Signup
                <Link to="/login">
                    Go To Login Page.
                </Link>
            </p>
        </div>
    )
}

export default Signup;

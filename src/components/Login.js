import React from 'react';
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="Log-container">
            <div>
                <input placeholder="Enter Email/Phone" />
            </div>
            <div>
                <input type="password" placeholder="Enter Password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <div>
                <p>Don't Have An Account?
                    <Link to="/signup">
                        Create Account.
                    </Link>
                </p>
                
            </div>
            
        </div>

    );

}

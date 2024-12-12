import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (

        <div>
            <div className="header d-flex justify-content-center">
                <h1>Data Table</h1>
                <nav className='d-flex'>

                    <ul>
                        <li>
                            <Link to="/register">login</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/login">register</Link>

                        </li>
                    </ul>

                </nav>
            </div>
        </div>

    )
}

export default Header

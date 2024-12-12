import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
    return (
        <div align="center">
            <h2>HomePage</h2>
            <p>Welcome {userName.name}</p>
            <button onClick={handleLogout} typt="button">Logout</button>
        </div>
    )
}

export default Home

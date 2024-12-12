import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const Navigate = useNavigate

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("register successfully")
        localStorage.setItem("user", JSON.stringify(input));
        Navigate("/login")

    }



    return (
        <div align="center">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                </div>
                <br />
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </div>
                <br />
                <div>
                    <label> password:</label>
                    <input type="password" placeholder="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <br />
                <div>
                    <button type="submit"> Register</button>
                </div>
            </form>
            <Link to={"/login"}>login</Link>
        </div>
    )
}

export default Register;

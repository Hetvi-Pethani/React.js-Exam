import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

   const handleLogin = (e) => {

        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
     

        if (
            input.email === loggeduser.email &&
            input.password === loggeduser.password
        ) {
            alert("login success")
            localStorage.setItem("loggedin", true)
            navigate("/")
        }
        else {
            alert("wrong Email & password ")
        }
    }



    return (
        <div align="center">
            <h2>Login page</h2>
            <form onSubmit={handleLogin}>

                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label> password:</label>
                    <input type="password" placeholder="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <br/>
                <div>
                    <button type="submit"> Login</button>
                </div>
                <p>Don't have an account?<a href="register">Register here</a></p>
                
            </form>
           <Link to={"/home"}></Link>
        </div>
    )
}

export default Login;

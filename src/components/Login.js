import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className = "login">
            <h2>Login</h2>
            <BrowserRouter>
                <p>New User? Register <Link to = "/register">here</Link></p>
            </BrowserRouter>
            
            <form>
                <label>Username:</label>
                <input 
                    type = "text"
                    required
                    value = {username}
                    placeholder='Enter your username'
                    minLength="8"
                    maxLength="20"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input 
                    type = "text"
                    required
                    value = {password}
                    placeholder='Enter your password'
                    minLength="8"
                    maxLength="20"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
                <p>{username} {password}</p>
            </form>
        </div>
    )
}

export default Login;
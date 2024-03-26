import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password,
            });
            if (response.data === "exist") {
                history("/home", { state: { id: email } });
            } else if (response.data === "notexist") {
                setError("User not found. Please sign up.");
            }
        } catch (e) {
            console.log(e);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={submit}>
                <h1>Login</h1>
                {error && <div className="error">{error}</div>}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <div className="password-input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    
                </div>
                <button type="submit">Login</button>

                <div className="auth-switch">
                <p>OR</p>
                <Link to="/signup">Signup Page</Link>
            </div>
            </form>
            
        </div>
    );
}

export default Login;

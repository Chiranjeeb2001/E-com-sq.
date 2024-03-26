import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
            });
            if (response.data === "exist") {
                setError("User already exists.");
            } else if (response.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (e) {
            console.log(e);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={submit}>
                <h1>Signup</h1>
                {error && <div className="error">{error}</div>}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>

                <div className="auth-switch">
                <p>OR</p>
                <Link to="/">Login Page</Link>
            </div>
            </form>
            
        </div>
    );
}

export default Signup;

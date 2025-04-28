import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(null)
    const Navigater = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await axios.post(
                '/api/user/login',
                {
                    email: email.toLowerCase().trim(),
                    password
                }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            }
            )

            setMessage(user.data.message)
            setSuccess(user.data.success)
            if (user.data.success) {
                setTimeout(() => {
                    Navigater('/')
                }, 1000);

            }
            setTimeout(() => {
                setMessage('')
            }, 4000);

        } catch (error) {
            if (error.name = 'ValidationError') {
                console.error('validationError', error.message)
                return
            }
            console.error("Internal server error", error)
        }
    }

    return (
        <section className='auth_section'>
            <form onSubmit={handleSubmit} className="auth_container" >
                <h2>Login</h2>
                <input
                    type="email"
                    value={email} placeholder='Email'
                    onChange={e => setemail(e.target.value)}
                    required
                    style={{ textTransform: "lowercase" }} />
                <input type="password" value={password} placeholder='Password' onChange={e => setpassword(e.target.value)} required />
                <button type='submit'>Login</button>
                <p>No have an account? <Link to="/signup">Signup</Link></p>
                <p style={{ color: success ? "green" : "red" }}>{message}</p>
            </form>
        </section>
    )
}

export default LoginPage

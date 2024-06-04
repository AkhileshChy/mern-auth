import React, { useState } from 'react'

function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const registerUser = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Name'
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder='Email'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder='Password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register

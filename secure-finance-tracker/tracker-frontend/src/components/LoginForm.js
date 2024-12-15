// frontend/src/components/LoginForm.js
import { useState } from 'react';
import { loginUser } from '../api';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await loginUser(email, password);
            localStorage.setItem('token', data.token);
            onLogin(data.email);
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;

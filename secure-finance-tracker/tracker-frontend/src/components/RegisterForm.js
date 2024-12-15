// frontend/src/components/RegisterForm.js
import { useState } from 'react';
import { registerUser } from '../api';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await registerUser(email, password);
            alert('User registered! You can now login.');
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;

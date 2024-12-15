// frontend/src/pages/Home.js
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Secure Finance Tracker</h1>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
    );
}

export default Home;

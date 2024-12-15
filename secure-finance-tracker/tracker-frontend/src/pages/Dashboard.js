// frontend/src/pages/Dashboard.js
import { useEffect, useState } from 'react';
import { getTransactions } from '../api';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();

    async function fetchTransactions() {
        try {
            const { data } = await getTransactions();
            setTransactions(data);
        } catch (err) {
            console.error(err);
            // If unauthorized, token might be invalid
            alert('Please login again.');
            navigate('/login');
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    function handleAdd(newTransaction) {
        setTransactions([newTransaction, ...transactions]);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <TransactionForm onAdd={handleAdd} />
            <TransactionList transactions={transactions} />
        </div>
    );
}

export default Dashboard;

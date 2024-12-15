// frontend/src/components/TransactionForm.js
import { useState } from 'react';
import { addTransaction } from '../api';

function TransactionForm({ onAdd }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await addTransaction(amount, description);
            onAdd(data);
            setAmount('');
            setDescription('');
        } catch (err) {
            console.error(err);
            alert('Failed to add transaction');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Transaction</h3>
            <input placeholder="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default TransactionForm;

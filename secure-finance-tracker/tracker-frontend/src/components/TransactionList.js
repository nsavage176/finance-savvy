// frontend/src/components/TransactionList.js
function TransactionList({ transactions }) {
    return (
        <div>
            <h3>Your Transactions</h3>
            <ul>
                {transactions.map(t => (
                    <li key={t._id}>{t.description}: ${t.amount} on {new Date(t.date).toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;

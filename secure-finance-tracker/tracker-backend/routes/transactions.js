// backend/routes/transactions.js
const express = require('express');
const Transaction = require('../models/Transaction');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

// GET all transactions for the logged-in user
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user }).sort({ date: -1 });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new transaction
router.post('/', async (req, res) => {
    const { amount, description } = req.body;

    try {
        const newTransaction = new Transaction({
            user: req.user,
            amount,
            description
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

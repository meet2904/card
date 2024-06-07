const Item = require('./models/item');
const db = require('./database');
const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Define your API routes here
// ...
// Define your API routes here
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.post('/api/items', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newItem = new Item({ name, description });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete('/api/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Start the server
const port = 3000; // You can choose any available port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import express from "express";
import data from "./data.js";

const app = express();

// api routes

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(p => p._id === req.params.id);
    product ? res.send(product) : res.status(404).send({ message: 'Produto não encontrado' });
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.get('/', (req, res) => {
    res.send('Server is ready');
})

const port = process.env.PORT || 2330;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
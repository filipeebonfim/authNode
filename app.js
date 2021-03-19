const express = require('express');
const app = express();

const productsRoute = require('./src/controllers/productController');

app.use('/products', productsRoute);

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OK'
    })
})

module.exports = app;
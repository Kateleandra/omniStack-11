const express = require('express');

const routes = express.Router();

app.post('/users', (req, res) =>{
    const body = req.body;
    console.log(body);
});

app.get('/', (req, res) => {
    return res.json({
        evento: "teste2"
    })
});

module.exports = routes;
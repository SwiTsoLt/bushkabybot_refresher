require('dotenv').config();
const express = require('express');

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
    res.status(200).end()
})

app.listen(PORT)
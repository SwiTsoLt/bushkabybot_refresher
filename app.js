require('dotenv').config();
const child_process = require('child_process');
const express = require('express');

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
    res.status(200).end()
})

app.listen(PORT, () => {
    child_process.exec("python -m pip install --upgrade pip", () => {
        child_process.exec("python -m pip install requests", () => {
            child_process.exec("python main.py", () => {
                
            })
        })
    })
})
require('dotenv').config();
const child_process = require('child_process');
const express = require('express');
const axios = require('axios') 

const app = express()

const PORT = process.env.PORT ?? 3000


function start() {
  setInterval(()=>{
axios.get('https://bushkabybot-b050.onrender.com').then(res => console.log(res.status))
  }, 60000) 
} 

app.get('/', (_req, res) => {
    res.status(200).end()
})

app.listen(PORT, start)
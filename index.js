// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Use PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello I am Wizy and I am Creating a Simple Node.js A Dockerized Web App!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


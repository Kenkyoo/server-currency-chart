const express = require('express');
const axios = require('axios');
const cors = require('cors');
const moment = require('moment'); // Para manejar fechas fácilmente

const app = express();
const port = 3000;

// Middleware
app.use(cors());

const url_base = 'https://api.frankfurter.app';

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/api/latest', async (req, res) => {
  try {
    const response = await axios.get(`${url_base}/latest?from=USD`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/currencies', async (req, res) => {
  try {
    const response = await axios.get(`${url_base}/currencies`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

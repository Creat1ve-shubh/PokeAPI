const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Pokemon data' });
  }
});

app.get('/location/:idOrName', async (req, res) => {
    try {
        const { idOrName } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/location/${idOrName}/`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching location data:', error);
        res.status(500).json({error: 'Error getting location data'});
    }
});


app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});

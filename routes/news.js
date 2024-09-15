
const express = require('express');
const axios = require('axios');
const router = express.Router();

const GNEWS_API_URL = 'https://gnews.io/api/v4/search';

router.get('/', async (req, res) => {
  const { q, lang, country, page } = req.query;
  try {
    const response = await axios.get(GNEWS_API_URL, {
      params: {
        q: q || 'news',
        lang: lang || 'en',
        country: country || 'us',
        page: page || 1,
        token: process.env.GNEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.toString() });
  }
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const newsRouter = require('./routes/news');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(process.env.GNEWS_API_KEY); // This should print your API key

});

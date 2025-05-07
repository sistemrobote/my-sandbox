// server.js (ESM style)
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = '158384';
const CLIENT_SECRET = '6fa55aac116bb6af74948605717ebe65633c8622';
const REDIRECT_URI = 'http://localhost:3000/redirect';

app.get('/api/exchange_token', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    });

    res.json(response.data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));

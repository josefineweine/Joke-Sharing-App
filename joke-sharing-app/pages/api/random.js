// pages/api/jokes/random.js

import fs from 'fs';
import path from 'path';

const jokesFilePath = path.join(process.cwd(), 'data', 'jokes.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Read the jokes data from the JSON file
    const jokesData = JSON.parse(fs.readFileSync(jokesFilePath, 'utf8'));

    // Select a random joke from the jokesData array
    const randomIndex = Math.floor(Math.random() * jokesData.length);
    const randomJoke = jokesData[randomIndex];

    res.status(200).json(randomJoke);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// pages/api/jokes.js

import fs from 'fs';
import path from 'path';

const jokesFilePath = path.join(process.cwd(), 'data', 'jokes.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Read the jokes data from the JSON file
    const jokesData = JSON.parse(fs.readFileSync(jokesFilePath, 'utf8'));
    res.status(200).json(jokesData);
  } else if (req.method === 'PUT') {
    // Get the joke ID from the request URL
    const jokeId = req.query.id;

    // Read the jokes data from the JSON file
    const jokesData = JSON.parse(fs.readFileSync(jokesFilePath, 'utf8'));

    // Find the joke with the given ID and update its upvotes count
    const updatedJokesData = jokesData.map((joke) =>
      joke.id === jokeId ? { ...joke, upvotes: joke.upvotes + 1 } : joke
    );

    // Save the updated jokes data back to the JSON file
    fs.writeFileSync(jokesFilePath, JSON.stringify(updatedJokesData, null, 2));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

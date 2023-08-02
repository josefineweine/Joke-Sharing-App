// components/JokeList.js

import { useState } from 'react';

const JokeList = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch('/api/jokes/random');
      if (response.ok) {
        const data = await response.json();
        setRandomJoke(data);
      } else {
        alert('Failed to fetch a random joke. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleRandomJokeClick = () => {
    fetchRandomJoke();
  };

  return (
    <div className="joke-list max-w-md mx-auto p-4">
      <h2>Random Joke</h2>
      {randomJoke ? (
        <div>
          <p className="joke-text mb-2">{randomJoke.joke}</p>
          <p className="author-text">By: {randomJoke.author}</p>
          <p className="upvotes-text">Upvotes: {randomJoke.upvotes}</p>
        </div>
      ) : (
        <p className="no-joke-text">No random joke available. Click the button below to get a surprise laugh!</p>
      )}
      <button className="random-joke-btn" onClick={handleRandomJokeClick}>
        Random Joke
      </button>
    </div>
  );
};

export default JokeList;

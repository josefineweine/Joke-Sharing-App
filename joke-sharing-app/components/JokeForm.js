// components/JokeForm.js

import { useState } from 'react';

const JokeForm = () => {
  const [formData, setFormData] = useState({
    joke: '',
    author: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.joke.trim() || !formData.author.trim()) {
      alert('Please fill in both the joke and author fields.');
      return;
    }

    const newJoke = {
      joke: formData.joke,
      author: formData.author,
      upvotes: 0,
    };

    try {
      const response = await fetch('/api/jokes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJoke),
      });

      if (response.ok) {
        setFormData({
          joke: '',
          author: '',
        });
        alert('Joke submitted successfully!');
      } else {
        alert('Failed to submit joke. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="joke-form max-w-md mx-auto p-4">
      <h2>Submit a Joke</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="joke">Joke:</label>
          <textarea
            id="joke"
            name="joke"
            value={formData.joke}
            onChange={handleChange}
            rows="3"
            required
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="author">Your Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Joke
        </button>
      </form>
    </div>
  );
};

export default JokeForm;

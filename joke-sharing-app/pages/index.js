// pages/index.js

import Head from 'next/head';
import JokeForm from '../components/JokeForm';
import JokeList from '../components/JokeList';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Joke Sharing App</title>
        <meta name="description" content="Share and upvote your favorite jokes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Joke Sharing App</h1>
        <JokeForm />
        <JokeList />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Joke Sharing App</p>
      </footer>

    </div>
  );
};

export default HomePage;

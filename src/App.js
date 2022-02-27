import React from 'react';
import Jokes from './components/Jokes';
import jokesData from './jokesData';

const App = () => {
  const jokeElements = jokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
  })
    return (
        <div>
           {jokeElements}
        </div>
    );
}

export default App;

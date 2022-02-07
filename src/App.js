import React from 'react';
import Jokes from './components/Jokes';

const App = () => {
    return (
        <div>
            <Jokes 
                setup="Setup: I got my daughter a fridge for her birthday."
                punchline="Punchline: I can't wait to see her face light up when she opens it."
            />
              <Jokes 
                setup="Setup: How did the hacker escape the police?"
                punchline="Punchline: He just ransomware!"
            />
              <Jokes 
                setup="Setup: Why don't pirates travel on mountain roads?"
                punchline="Punchline: Scurvy."
            />
              <Jokes 
                setup="Setup: Why do bees stay in the hive in the winter?"
                punchline="Punchline: Swarm."
            />
        </div>
    );
}

export default App;

import React from 'react';

const Jokes = ({ setup, punchline }) => {
    return (
        <div>
            {setup} <br />
            {punchline}
        </div>
    );
}

export default Jokes;

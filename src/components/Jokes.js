import React, { useState } from 'react';

const Jokes = (props) => {
    const [isShown, setIsShown] = useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown) 
    }

    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}  
            {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
            {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
            <hr />
        </div>
    );
}

export default Jokes;

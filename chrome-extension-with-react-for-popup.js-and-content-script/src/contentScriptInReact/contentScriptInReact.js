/// <reference types="chrome"/>

import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('content-root');
const root = createRoot(container);

const App = () => {
    const [name, setName] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setName(name);
        console.log(`Hello`, e.target[0].value);
    };

    return (
        <div>
            <form onSubmit={(e) => handleClick(e)}>
                <input type="text"
                       name="text"
                       placeholder="text"
                       alt="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <button>Finally I am done!</button>
            </form>
        </div>
    );
};

root.render(<App/>);
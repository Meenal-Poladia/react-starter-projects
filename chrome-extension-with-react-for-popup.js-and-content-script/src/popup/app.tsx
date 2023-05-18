/// <reference types="chrome"/>

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => {
    console.log(`Hi`);
    const handleClick = () => {
        const url = chrome.runtime.getURL('contentScriptInReact.html');
        chrome.tabs.create({url});
    };

    return (
        <div>
            <button onClick={handleClick}>Click me to open a new tab</button>
        </div>
    );
};

root.render(<App/>);
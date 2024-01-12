import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';

import { Home } from './templates/Home';
import { CounterContextProvider } from './context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CounterContextProvider>
        <Home/>
    </CounterContextProvider>
);

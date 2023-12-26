import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import TemperatureInput from './MakeTemperatureInput/TemperatureInput';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <TemperatureInput />
);

reportWebVitals();
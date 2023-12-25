import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AttendanceBook from './MakeAttendanceBook/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AttendanceBook />
);

reportWebVitals();
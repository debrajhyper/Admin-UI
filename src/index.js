import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from './Components/DarkMode/ThemeContext';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
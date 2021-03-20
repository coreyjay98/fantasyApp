import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SiteContextProvider } from './context/SiteContext';
import { PlayerContextProvider } from './context/PlayerContext';

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

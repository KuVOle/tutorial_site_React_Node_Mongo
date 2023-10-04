import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Context = createContext({});
root.render(
  <React.StrictMode>
    <Context.Provider value=''>
      <App />
    </Context.Provider>
  </React.StrictMode >
);

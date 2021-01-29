import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import {AppProvider} from './app/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


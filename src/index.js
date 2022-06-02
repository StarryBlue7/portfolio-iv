import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route 
          path="*"
          element={<App />}
          exact={false}
          strict={false}
        />
      </Routes>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const LAYOUT = { display: 'grid', rowGap: 20, margin: 20 };
import { Faq } from './Faq';
import { Plans } from './Plans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={LAYOUT}>
      <Plans />
      <Faq />
    </div>
  </React.StrictMode>
);

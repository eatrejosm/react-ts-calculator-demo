// import React from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './components/App/index';
// import './index.scss';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

import React from 'react'
import ReactDOM from 'react-dom/client'
// import * as serviceWorker from './serviceWorker'
import App from './components/App/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

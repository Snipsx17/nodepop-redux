import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';

import storage from './utils/storage';
import { configureClient } from './api/client';
import configureStore from './store';

import './index.css';
import Root from './components/Root';
import App from './components/app';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);
const store = configureStore({ auth: !!accessToken }, { router });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root store={store} router={router} />
  </React.StrictMode>,
);

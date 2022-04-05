import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './assets/sass/index.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

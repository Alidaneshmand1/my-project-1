import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './login/login.css'
import './home/home.css'
import './products/style-products-card.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './products/car.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

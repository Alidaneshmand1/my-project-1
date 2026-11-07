import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './login/login.css'
import './home/home.css'
import './products/style-products-card.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './products/car.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './signin/Sign in.css'
import './buy/buy.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//cd "C:\Users\ssd\Desktop\project\my project\1\server"//
//node server.js//
//cd "C:\Users\ssd\Desktop\project\my project\1"//
//npm run dev//
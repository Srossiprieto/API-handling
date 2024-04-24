import React from 'react'
import ReactDOM from 'react-dom/client'
import Ejemplo1 from './Ejemplo1.jsx'
import './index.css'
import Ejemplo2 from './Ejemplo2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ejemplo1/>
    <Ejemplo2/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { ProductProvider } from './contexts/ProductsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <Router />
      {/* <App /> */}
    </ProductProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.js'
import { ProductProvider } from './contexts/ProductsProvider.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <Router />
      {/* <App /> */}
    </ProductProvider>
  </React.StrictMode>
)

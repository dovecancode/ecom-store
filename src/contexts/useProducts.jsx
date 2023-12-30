import { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import productServices from '../services/productServices'

const ProductContext = createContext()

function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  const [status, setStatus] = useState('idle')

  // get all products
  useEffect(() => {
    async function getAllProducts() {
      setStatus('loading')
      try {
        const data = await productServices.getAllShopProducts()
        setProducts(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    getAllProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, status }}>
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  return useContext(ProductContext)
}

ProductProvider.propTypes = {
  children: PropTypes.element,
}

export { ProductProvider, useProduct }

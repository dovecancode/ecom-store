import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

import productServices from '../services/productServices'

const ProductContext = createContext()

function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  const [categories, setCategories] = useState([])

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
        console.error(error.message)
      }
    }
    getAllProducts()
  }, [])

  // useEffect(() => {
  //   async function getCategoryTitle() {
  //     try {
  //       const names = await productServices.getCategoryTitle()
  //       setCatNames(names)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //   }
  //   getCategoryTitle()
  // }, [])

  useEffect(() => {
    async function getCategories() {
      setStatus('loading')
      try {
        const data = await productServices.getCategories()

        setCategories(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.error(error.message)
      }
    }
    getCategories()
  }, [])

  return (
    <ProductContext.Provider value={{ products, categories, status }}>
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

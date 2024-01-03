import PropTypes from 'prop-types'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import productServices from '../services/productServices'

const ProductContext = createContext()

function ProductProvider({ children }) {
  const [homeProducts, setHomeProducts] = useState([])
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [singleProduct, setSingleProduct] = useState({})

  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState([])

  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function getHomeProducts() {
      try {
        setStatus('loading')
        const data = await productServices.getHomeProducts(8)
        setHomeProducts(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.error(error.message)
      }
    }
    getHomeProducts()
  }, [])

  // get all products
  useEffect(() => {
    async function getAllShopProducts() {
      try {
        setStatus('loading')
        const data = await productServices.getAllShopProducts()
        setProducts(data)
      } catch (error) {
        setStatus('error')
        console.error(error.message)
      }
    }
    getAllShopProducts()
  }, [])

  //get category names and its total items per category
  useEffect(() => {
    async function getCategories() {
      try {
        setStatus('loading')
        const data = await productServices.getCategories()
        setCategories(data)
      } catch (error) {
        setStatus('error')
        console.error(error.message)
      }
    }
    getCategories()
  }, [])

  async function getCategoryProducts(catName) {
    try {
      setStatus('loading')
      const data = await productServices.getCategoryProducts(catName)
      setProducts(data)
    } catch (error) {
      setStatus('error')
      console.error(error.message)
    }
  }

  const getSingleProduct = useCallback(async function getSingleProduct(id) {
    try {
      setStatus('loading')
      const data = await productServices.getSingleProduct(id)
      setSingleProduct(data)
    } catch (error) {
      setStatus('error')
      console.error(error.message)
    }
  }, [])

  return (
    <ProductContext.Provider
      value={{
        homeProducts,
        products,
        categories,
        getCategoryProducts,
        getSingleProduct,

        singleProduct,
        setCartItems,
        cartItems,
        setQuantity,
        quantity,
        status,
      }}
    >
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

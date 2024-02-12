import { useEffect, useState } from 'react'
import { useProduct } from '../contexts/ProductsContext'
import productServices from '../services/productServices'

function useShopProducts() {
  // const [products, setProducts] = useState(null)
  const { products, setProducts } = useProduct()
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function fetchData() {
      setStatus('loading')
      try {
        const res = await productServices.getAllShopProducts()
        setProducts(res.data)
        setStatus('success')
      } catch (error) {
        console.error('Error fetching products ', error.response)
        setStatus('error')
      }
    }
    fetchData()
  }, [setProducts])

  async function getAllShopProducts() {
    try {
      setStatus('loading')
      const res = await productServices.getAllShopProducts()
      setProducts(res.data)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      console.error(error.message)
    }
  }

  return { products, status, getAllShopProducts }
}

export default useShopProducts

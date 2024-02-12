import { useEffect, useState } from 'react'
import productServices from '../services/productServices'

function useHomeProducts() {
  const [products, setProducts] = useState(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setStatus('loading')
    try {
      const res = await productServices.getHomeProducts(8)
      setProducts(res.data)
      setStatus('success')
    } catch (error) {
      console.error('Error fetching home products ', error.response)
      setStatus('error')
    }
  }

  return { products, status }
}

export default useHomeProducts

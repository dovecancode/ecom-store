import { useEffect, useState } from 'react'

import productServices from '../services/productServices'
import { ProductTypes } from '../types'

function useHomeProducts() {
  const [homeProducts, setHomeProducts] = useState<ProductTypes[]>([])
  const [status, setStatus] = useState<string>('idle')

  useEffect(() => {
    async function getHomeProducts() {
      try {
        setStatus('loading')

        const data = await productServices.getHomeProducts(8)
        setHomeProducts(data)

        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.error((error as Error).message)
      }
    }
    getHomeProducts()
  }, [])

  return { homeProducts, status }
}

export default useHomeProducts

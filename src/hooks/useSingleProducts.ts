import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productServices from '../services/productServices'
import { ProductTypes } from '../types'

function useSingleProducts() {
  const [singleProduct, setSingleProduct] = useState<ProductTypes | null>(null)
  const [status, setStatus] = useState('idle')

  const { id } = useParams()

  useEffect(() => {
    async function getSingleProduct() {
      try {
        if (id) {
          setStatus('loading')

          const data = await productServices.getSingleProduct(id)
          setSingleProduct(data)

          setStatus('success')
        }
      } catch (error) {
        setStatus('error')
        console.error((error as Error).message)
      }
    }
    getSingleProduct()
  }, [])

  return { singleProduct, status }
}

export default useSingleProducts

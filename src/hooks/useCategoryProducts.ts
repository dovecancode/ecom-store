import { useEffect, useState } from 'react'

import { ProductContenxtType, useProduct } from '../contexts/ProductsProvider'
import productServices from '../services/productServices'
import { CategoryNamesTypes } from '../types'

function useCategoryProducts() {
  const [categoryNames, setCategoryNames] = useState<CategoryNamesTypes[]>([])
  const { products, setProducts } = useProduct() as ProductContenxtType

  const [status, setStatus] = useState<string>('idle')

  useEffect(() => {
    async function getCategories() {
      try {
        setStatus('loading')
        const data = await productServices.getCategories()
        setCategoryNames(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.error((error as Error).message)
      }
    }
    getCategories()
    getAllShopProducts()
  }, [])

  async function getAllShopProducts() {
    try {
      setStatus('loading')

      const data = await productServices.getAllShopProducts()
      setProducts(data)

      setStatus('success')
    } catch (error) {
      setStatus('error')
      console.error((error as Error).message)
    }
  }

  async function getCategoryProducts(catName: string) {
    try {
      setStatus('loading')

      const data = await productServices.getCategoryProducts(catName)
      setProducts(data)

      setStatus('success')
    } catch (error) {
      setStatus('error')
      console.error((error as Error).message)
    }
  }

  return {
    categoryNames,
    status,
    products,
    getAllShopProducts,
    getCategoryProducts,
  }
}

export default useCategoryProducts

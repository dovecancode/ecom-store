import { useEffect, useState } from 'react'
import { useProduct } from '../contexts/ProductsContext'
import productServices from '../services/productServices'

function useCategory() {
  // const [catProducts, setCatProducts] = useState(null)
  const { products, setProducts } = useProduct()
  const [catNames, setCatNames] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setStatus('loading')
    try {
      const catNames = await productServices.getCategories()
      setCatNames(catNames)
      setStatus('success')
    } catch (error) {
      console.error('Error fetching category names ', error.response)
      setStatus('error')
    }
  }

  async function getCategoryProducts(cat) {
    setStatus('loading')
    try {
      //fetch data here
      const res = await productServices.getCategoryProducts(cat)
      setProducts(res.data)
      setStatus('success')
    } catch (error) {
      console.error('Error fetching category products ', error.response)
      setStatus('error')
    }
  }

  return { getCategoryProducts, status, products, catNames }
}

export default useCategory

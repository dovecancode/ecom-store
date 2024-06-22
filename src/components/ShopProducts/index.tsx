import { Stack } from 'react-bootstrap'

import useCategoryProducts from '../../hooks/useCategoryProducts'
import Spinner from '../../ui/Spinner'
import Product from '../Product'

function ShopProducts() {
  const { products, status } = useCategoryProducts()

  const isLoading = status === 'loading'
  const error = status === 'error'

  if (isLoading)
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <Spinner />
      </div>
    )

  if (error) {
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <p>Data cant be loaded there must be something wrong</p>
      </div>
    )
  }
  return (
    <>
      {products.map((product) => (
        <Stack key={product.id} className="shop-product col-12 col-lg-4 mb-4">
          <Product product={product} />
        </Stack>
      ))}
    </>
  )
}

export default ShopProducts

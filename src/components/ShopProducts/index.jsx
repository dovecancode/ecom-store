import { Stack } from 'react-bootstrap'
import { useProduct } from '../../contexts/useProducts'
import Product from '../../ui/Product'
import Spinner from '../../ui/Spinner'

function ShopProducts() {
  const { products, status } = useProduct()

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
        <Stack key={product.id} className="col-12 col-lg-4 mb-4">
          <Product product={product} />
        </Stack>
      ))}
    </>
  )
}

export default ShopProducts

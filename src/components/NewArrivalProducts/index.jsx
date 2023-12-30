import { Row, Stack } from 'react-bootstrap'

import Spinner from '../../ui/Spinner'

import { useProduct } from '../../contexts/useProducts'
import Product from '../../ui/Product'

function NewArrivalProducts() {
  let { products, status } = useProduct()

  const isLoading = status === 'loading'
  const error = status === 'error'

  products = products.slice(0, 8)

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
    <Row>
      {products.map((product) => (
        <Stack
          key={product.id}
          className="col-12 col-sm-6 col-md-6 col-lg-3 my-5"
        >
          <Product product={product} />
        </Stack>
      ))}
    </Row>
  )
}

export default NewArrivalProducts

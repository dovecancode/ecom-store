import { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {
  ProductContenxtType,
  useProduct,
} from '../../contexts/ProductsProvider'
import useItemCart from '../../hooks/useItemCart'
import useSingleProducts from '../../hooks/useSingleProducts'
import Spinner from '../../ui/Spinner'

function SingleProductSection() {
  const [orderCount, setOrderCount] = useState(1)
  let { id } = useParams()

  const { cartItems } = useProduct() as ProductContenxtType

  const quantity =
    cartItems.length > 0 &&
    cartItems.find((item) => item.id === Number(id))?.quantity

  const { addProductToCart } = useItemCart()

  const { singleProduct, status } = useSingleProducts()

  const isLoading = status === 'loading'

  function handleAddCart() {
    if (singleProduct) {
      addProductToCart(singleProduct, orderCount)
    }
  }

  return (
    <section className="single-product">
      <Container className="px-4 px-lg-5 my-5">
        <Row className="align-items-center gx-4 gx-lg-5">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Col md={5}>
                <div className="single-product-feature-img mb-4">
                  <img
                    className="img-fluid"
                    src={singleProduct?.image}
                    alt=""
                  />
                </div>
              </Col>
              <Col md={7}>
                <div className="single-product-info">
                  <div className="detail">
                    <h1>{singleProduct?.title}</h1>
                    <hr />
                    <p className="h3">${singleProduct?.price}</p>
                    <p>{singleProduct?.description}</p>
                  </div>

                  <div className="add-cart d-flex gap-3">
                    <InputGroup className="w-50">
                      <InputGroup.Text
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          setOrderCount((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                      >
                        -
                      </InputGroup.Text>
                      <Form.Control
                        value={orderCount}
                        className="num-input text-center"
                        type="number"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(e) => setOrderCount(+e.target.value)}
                      />
                      <InputGroup.Text
                        style={{ cursor: 'pointer' }}
                        onClick={() => setOrderCount((prev) => prev + 1)}
                      >
                        +
                      </InputGroup.Text>
                    </InputGroup>
                    <Button
                      type="submit"
                      variant="dark"
                      size="sm"
                      onClick={handleAddCart}
                      disabled={quantity && quantity > 0 ? true : false}
                    >
                      Add to Cart
                    </Button>
                  </div>

                  <p className="lead mt-4">
                    Category: {singleProduct?.category}
                  </p>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default SingleProductSection

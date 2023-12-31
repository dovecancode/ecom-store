import { useEffect } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../contexts/useProductsContext'
import Spinner from '../../ui/Spinner'

function SingleProductSection() {
  const { singleProduct, status, getSingleProduct } = useProduct()
  const { id } = useParams()

  useEffect(() => {
    getSingleProduct(id)
  }, [id, getSingleProduct])

  const { title, image, description, price, category } = singleProduct

  const isLoading = status === 'loading'

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
                  <img className="img-fluid" src={image} alt="" />
                </div>
              </Col>
              <Col md={7}>
                <div className="single-product-info">
                  <div className="detail">
                    <h1>{title}</h1>
                    <hr />
                    <p className="h3">${price}</p>
                    <p>{description}</p>
                  </div>
                  <div className="add-cart d-flex gap-3">
                    <InputGroup className="w-50">
                      <InputGroup.Text style={{ cursor: 'pointer' }}>
                        -
                      </InputGroup.Text>
                      <Form.Control
                        className="text-center"
                        type="number"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <InputGroup.Text style={{ cursor: 'pointer' }}>
                        +
                      </InputGroup.Text>
                    </InputGroup>
                    <Button variant="dark" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                  <p className="lead mt-4">Category: {category}</p>
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

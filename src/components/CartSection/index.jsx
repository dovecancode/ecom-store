import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useProduct } from '../../contexts/useProductsContext'

function CartSection() {
  const { cartItems } = useProduct()

  const itemTotalAmout = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <section className="cart">
      <Container>
        <Row className="my-5">
          <Col lg={8}>
            <div className="cart-items">
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cart) => {
                    return (
                      <tr key={cart.id}>
                        <td className="text-center">
                          <img
                            style={{ maxWidth: '5rem', margin: 'auto' }}
                            className="img-fluid"
                            src={cart.image}
                            alt={cart.title}
                          />
                        </td>
                        <td style={{ maxWidth: '10rem' }}>{cart.title}</td>
                        <td>₱{cart.price}</td>
                        <td>{cart.quantity}</td>
                        <td>₱{cart.quantity * cart.price}</td>
                        <td>
                          <FaRegTrashAlt />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Total Amount</Card.Title>
                <Card.Text className="h3">₱{itemTotalAmout}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CartSection

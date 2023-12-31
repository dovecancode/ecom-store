import {
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useProduct } from '../../contexts/useProductsContext'
import useItemCart from '../../hooks/useItemCart'

function CartSection() {
  const { addProductToCart, removeProductFromCart } = useItemCart()
  const { cartItems } = useProduct()

  function handleAddCart(cart) {
    addProductToCart(cart)
  }

  function handleRemoveCart(cart) {
    removeProductFromCart(cart)
  }

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
                    const totalPricePerProduct = cart.quantity * cart.price
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
                        <td>
                          <InputGroup>
                            <InputGroup.Text
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleRemoveCart(cart)}
                            >
                              -
                            </InputGroup.Text>
                            <Form.Control
                              onChange={() => console.log()}
                              value={cart.quantity}
                              className="text-center"
                              type="number"
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <InputGroup.Text
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleAddCart(cart)}
                            >
                              +
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                        <td>₱{totalPricePerProduct.toFixed(2)}</td>
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
                <Card.Text className="h3">
                  ₱{itemTotalAmout.toFixed(2)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CartSection

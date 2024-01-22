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
import { Link } from 'react-router-dom'
import { useProduct } from '../../contexts/ProductsContext'
import useItemCart from '../../hooks/useItemCart'

function CartSection() {
  const { addProductToCart, removeProductFromCart, deleteItemFromCart } =
    useItemCart()
  const { cartItems } = useProduct()

  // event to addtocart and increasing it
  function handleAddToCart(cart) {
    addProductToCart(cart)
  }

  // event to decrease the cart order and eventually delete it when it goes to 0
  function handleRemoveFromCart(cart) {
    removeProductFromCart(cart)
  }

  // event to delete the item from cart when trash icon click
  function handleDeleteItem(cart) {
    deleteItemFromCart(cart)
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
              {!cartItems.length ? (
                <div>
                  <h1>Your Cart is empty</h1>
                </div>
              ) : (
                <>
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
                            <td style={{ maxWidth: '10rem' }}>
                              <Link to={`/product/${cart.id}`}>
                                {cart.title}
                              </Link>
                            </td>
                            <td>₱{cart.price}</td>
                            <td>
                              <InputGroup>
                                <InputGroup.Text
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => handleRemoveFromCart(cart)}
                                >
                                  -
                                </InputGroup.Text>
                                <Form.Control
                                  onChange={() => console.log()}
                                  value={cart.quantity}
                                  className="num-input text-center"
                                  type="number"
                                  aria-label="Amount (to the nearest dollar)"
                                />
                                <InputGroup.Text
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => handleAddToCart(cart)}
                                >
                                  +
                                </InputGroup.Text>
                              </InputGroup>
                            </td>
                            <td>₱{totalPricePerProduct.toFixed(2)}</td>
                            <td>
                              <FaRegTrashAlt
                                cursor="pointer"
                                onClick={() => handleDeleteItem(cart)}
                              />
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </>
              )}
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

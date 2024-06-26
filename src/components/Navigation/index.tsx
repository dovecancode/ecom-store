import { Badge, Container, Nav, Navbar, Stack } from 'react-bootstrap'
import { IoMdCart } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import useItemCart from '../../hooks/useItemCart'

import { useMediaQuery } from 'react-responsive'

function Navigation() {
  const { cartItems } = useItemCart()

  const isBigScreen = useMediaQuery({ query: '(width >= 63em)' })

  const totalCart = cartItems.reduce((acc, val) => acc + (val.quantity || 0), 0)

  return (
    <Navbar expand="lg" className="bg-body-tertiary ecom-nav">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="me-auto">Ecom-Store</Navbar.Brand>
        </LinkContainer>

        {/* Show only in smallerscreen */}
        {!isBigScreen && (
          <Stack className="icons me-4" direction="horizontal">
            <div className="p-2">
              <IoSearchOutline size={25} />
            </div>
            <div className="p-2 position-relative">
              <Link to="cart">
                <IoMdCart size={25} />
              </Link>
              {!!totalCart && (
                <Badge
                  style={{
                    top: '0.1rem',
                    right: '-0.3rem',
                  }}
                  className="position-absolute"
                  bg="danger"
                  pill
                >
                  {totalCart}
                </Badge>
              )}
            </div>
          </Stack>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

        {/* Show only in bigscreen */}
        {isBigScreen && (
          <Stack className="icons" direction="horizontal">
            <div className="p-2">
              <IoSearchOutline size={25} />
            </div>
            <div className="p-2 position-relative">
              <Link to="cart">
                <IoMdCart size={25} />
              </Link>
              {!!totalCart && (
                <Badge
                  style={{
                    top: '0.1rem',
                    right: '-0.3rem',
                  }}
                  className="position-absolute"
                  bg="danger"
                  pill
                >
                  {totalCart}
                </Badge>
              )}
            </div>
          </Stack>
        )}
      </Container>
    </Navbar>
  )
}

export default Navigation

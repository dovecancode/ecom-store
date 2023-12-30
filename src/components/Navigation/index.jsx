import { Container, Nav, Navbar, Stack } from 'react-bootstrap'

import { IoMdCart } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ecom-nav">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ecom-Store</Navbar.Brand>
        </LinkContainer>

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

        <Stack className="icons" direction="horizontal">
          <div className="p-2">
            <IoSearchOutline size={20} />
          </div>
          <div className="p-2">
            <IoMdCart size={20} />
          </div>
        </Stack>
      </Container>
    </Navbar>
  )
}

export default Navigation

import { Container, Nav, Navbar, Stack } from 'react-bootstrap'

import { IoMdCart } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { TiUser } from 'react-icons/ti'
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ecom-nav">
      <Container>
        <Navbar.Brand href="/">Ecom-Store</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Stack className="icons" direction="horizontal">
          <div className="p-2">
            <IoSearchOutline size={20} />
          </div>
          <div className="p-2">
            <IoMdCart size={20} />
          </div>
          <div className="p-2">
            <TiUser size={20} />
          </div>
        </Stack>
      </Container>
    </Navbar>
  )
}

export default Navigation

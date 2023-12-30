import { Col, Container, Row } from 'react-bootstrap'
import ShopProducts from '../ShopProducts'
import ShopSidebar from '../ShopSidebar'

function ShopSection() {
  return (
    <section className="shop-section">
      <Container>
        <Row className="mt-5">
          <Col lg={9}>
            <Row>
              <ShopProducts />
            </Row>
          </Col>
          <Col sm={3}>
            <Row>
              <ShopSidebar />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ShopSection

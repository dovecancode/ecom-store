import { Col, Container, Row } from 'react-bootstrap'
import ShopProducts from '../ShopProducts'
import ShopSidebar from '../ShopSidebar'

function ShopSection() {
  return (
    <section className="shop-section">
      <Container>
        <Row className="mt-5">
          <Col lg={9} className="order-2 order-lg-1">
            <Row>
              <ShopProducts />
            </Row>
          </Col>
          <Col lg={3} sm={12} className="order-1 order-lg-2">
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

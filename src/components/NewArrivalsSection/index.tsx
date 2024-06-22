import { Container } from 'react-bootstrap'
import SectionHeader from '../../shared/SectionHeader'
import NewArrivalProducts from '../NewArrivalProducts'

function NewArrivalsSection() {
  return (
    <section className="new-arrivals">
      <Container className="my-5">
        <SectionHeader
          headTag={2}
          headingText="New Arrivals"
          subHeadingText="The best Online sales to shop these weekend"
          orientation="center"
        />
        <NewArrivalProducts />
      </Container>
    </section>
  )
}

export default NewArrivalsSection

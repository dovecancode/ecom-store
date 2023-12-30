import { Badge, ListGroup, Spinner } from 'react-bootstrap'
import { useProduct as getCategoryNames } from '../../contexts/useProducts'

function ShopSidebar() {
  const { categories, status } = getCategoryNames()

  const isLoading = status === 'loading'
  const error = status === 'error'

  if (error) {
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <p>Data cant be loaded there must be something wrong</p>
      </div>
    )
  }

  return (
    <aside className="sidebar">
      <h2 className="h2 mb-3">Categories</h2>
      <ListGroup>
        {isLoading ? (
          <div className="d-flex justify-content-center h-100">
            <Spinner animation="grow" aria-hidden="true" role="status" />
          </div>
        ) : (
          categories.map(({ catName, catLength }) => (
            <ListGroup.Item
              key={catName}
              className="d-flex justify-content-between align-items-star text-capitalize"
            >
              {catName}
              <Badge bg="success" pill>
                {catLength}
              </Badge>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </aside>
  )
}

export default ShopSidebar

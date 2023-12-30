import { ListGroup } from 'react-bootstrap'
import { useProduct as getCategoryNames } from '../../contexts/useProductsContext'
import CategoryList from '../CategoryList'

function ShopSidebar() {
  const { categories, status, getCategoryProducts } = getCategoryNames()

  const isLoading = status === 'loading'
  const error = status === 'error'

  function handleClick(catName) {
    getCategoryProducts(catName)
  }

  if (error) {
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <p>Data cant be loaded there must be something wrong</p>
      </div>
    )
  }

  // if (isLoading) {
  //   return (
  //     <div className="d-flex justify-content-center h-100">
  //       <Spinner animation="grow" aria-hidden="true" role="status" />
  //     </div>
  //   )
  // }

  return (
    <aside className="sidebar">
      <h2 className="h2 mb-3">Categories</h2>
      <ListGroup>
        {categories.map((category) => (
          <CategoryList
            key={category.catName}
            {...category}
            onSelectCategory={handleClick}
          />
        ))}
      </ListGroup>
    </aside>
  )
}

export default ShopSidebar

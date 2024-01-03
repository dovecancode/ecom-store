import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useProduct as getCategoryNames } from '../../contexts/useProductsContext'
import CategoryList from '../CategoryList'

function ShopSidebar() {
  const { categories, status, getCategoryProducts } = getCategoryNames()
  const [active, setActive] = useState(-1)

  // const newCategory = [
  //   {
  //     catName: 'all',
  //   },
  //   ...categories,
  // ]

  // const isLoading = status === 'loading'
  const error = status === 'error'

  function handleClick(catName, idx) {
    getCategoryProducts(catName)
    setActive(idx)
  }

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
      <ListGroup className="mb-5">
        {categories.map((category, idx) => (
          <CategoryList
            key={category.catName}
            {...category}
            isActive={active === idx}
            onSelectCategory={() => {
              handleClick(category.catName, idx)
            }}
          />
        ))}
      </ListGroup>
    </aside>
  )
}

export default ShopSidebar

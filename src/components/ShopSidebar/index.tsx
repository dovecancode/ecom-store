import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
// import { useProduct as getCategoryNames } from '../../contexts/ProductsProvider'
import useCategoryProducts from '../../hooks/useCategoryProducts'
import CategoryList from '../CategoryList'

function ShopSidebar() {
  const { categoryNames, status, getAllShopProducts, getCategoryProducts } =
    useCategoryProducts()

  const [active, setActive] = useState(-1)

  const newCategory = [
    {
      catName: 'all',
    },
    ...categoryNames,
  ]

  const error = status === 'error'

  function handleClick(catName: string, idx: number) {
    catName === 'all' ? getAllShopProducts() : getCategoryProducts(catName)
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
        {newCategory.map((category, idx) => (
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

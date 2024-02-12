import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
// import { useProduct as getCategoryNames } from '../../contexts/ProductsContext'
import useCategory from '../../hooks/useCategory'
import useShopProducts from '../../hooks/useShopProducts'
import CategoryList from '../CategoryList'

function ShopSidebar() {
  const [active, setActive] = useState(-1)
  // const { categories, status, getCategoryProducts, getAllShopProducts } =
  //   getCategoryNames()

  const { getAllShopProducts, status: productStat } = useShopProducts()

  const { catNames, status: catnamesStat, getCategoryProducts } = useCategory()

  const isLoading = catnamesStat === 'loading'
  const isProductLoading = productStat === 'loading'
  // const error = status === 'error'

  const newCategory = [
    {
      catName: 'all',
    },
    ...catNames,
  ]

  function handleClick(catName, idx) {
    catName === 'all' ? getAllShopProducts() : getCategoryProducts(catName)

    setActive(idx)
  }

  if (isProductLoading) {
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
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
          </>
        )}
      </ListGroup>
    </aside>
  )
}

export default ShopSidebar

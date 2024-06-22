import { Badge, ListGroup } from 'react-bootstrap'
import { CategoryNamesTypes } from '../../types'

type CategoryListProps = CategoryNamesTypes & {
  onSelectCategory: () => void
  isActive: boolean
}

function CategoryList({
  catName,
  catLength,
  onSelectCategory,
  isActive,
}: CategoryListProps) {
  return (
    <ListGroup.Item
      active={isActive}
      style={{ cursor: 'pointer' }}
      onClick={onSelectCategory}
      className="d-flex justify-content-between align-items-star text-capitalize"
    >
      {catName}
      <Badge bg="success" pill>
        {catLength}
      </Badge>
    </ListGroup.Item>
  )
}

export default CategoryList

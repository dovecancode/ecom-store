import PropTypes from 'prop-types'
import { Badge, ListGroup } from 'react-bootstrap'

function CategoryList({ catName, catLength, onSelectCategory }) {
  return (
    <ListGroup.Item
      style={{ cursor: 'pointer' }}
      onClick={() => onSelectCategory(catName)}
      key={catName}
      className="d-flex justify-content-between align-items-star text-capitalize"
    >
      {catName}
      <Badge bg="success" pill>
        {catLength}
      </Badge>
    </ListGroup.Item>
  )
}

CategoryList.propTypes = {
  catName: PropTypes.string,
  catLength: PropTypes.number,
  onSelectCategory: PropTypes.func,
}

export default CategoryList

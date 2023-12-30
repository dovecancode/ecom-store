import PropTypes from 'prop-types'

import { IoMdCart } from 'react-icons/io'

import { Link } from 'react-router-dom'
import styles from './style.module.css'

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div
        className={`${styles.product} position-relative overflow-hidden text-center shadow-lg flex-grow-1 py-3`}
      >
        <div
          className={`${styles['featured-image']} mx-auto d-flex align-items-center`}
        >
          <img className="img-fluid " src={product.image} alt={product.title} />
        </div>

        <div className="product-info mt-5">
          <h2 className="h5" title={product.title}>
            {product.title.substring(0, 20) + '...'}
          </h2>
          <p className="lead">${product.price}</p>
        </div>
        <div
          className={`${styles['add-to-cart-btn']} position-absolute`}
          onClick={(e) => e.preventDefault()}
        >
          <IoMdCart size={30} color="#fff" />
        </div>
      </div>
    </Link>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product

import { useEffect, useState } from 'react'

import { Row, Stack } from 'react-bootstrap'

import productServices from '../../services/productServices'
import Spinner from '../../ui/Spinner'

import styles from './style.module.css'

import { IoMdCart } from 'react-icons/io'

function NewArrivalProducts() {
  const [products, setProducts] = useState([])

  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function getProd() {
      setStatus('loading')
      try {
        const data = await productServices.getProducts(8)
        setProducts(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    getProd()
  }, [])

  const isLoading = status === 'loading'
  const error = status === 'error'

  if (isLoading)
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <Spinner />
      </div>
    )

  if (error) {
    return (
      <div className="d-flex" style={{ height: '30rem' }}>
        <p>Problem loading the data</p>
      </div>
    )
  }

  return (
    <Row>
      {products.map((product) => (
        <Stack
          key={product.id}
          className="col-12 col-sm-6 col-md-6 col-lg-3 my-5 d-flex"
        >
          <div
            className={`${styles.product} position-relative overflow-hidden text-center shadow-lg flex-grow-1 py-3`}
          >
            <div
              className={`${styles['featured-image']} w-50 mx-auto d-flex align-items-center`}
            >
              <img
                className="img-fluid "
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-info mt-5">
              <h2 className="h5" title={product.title}>
                {product.title.substring(0, 20) + '...'}
              </h2>
              <p className="lead">${product.price}</p>
            </div>
            <div className={`${styles['add-to-cart-btn']} position-absolute`}>
              <IoMdCart size={30} color="#fff" />
            </div>
          </div>
        </Stack>
      ))}
    </Row>
  )
}

export default NewArrivalProducts

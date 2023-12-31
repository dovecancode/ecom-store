import { useProduct } from '../contexts/useProductsContext'

function useItemCart() {
  const { cartItems, setCartItems } = useProduct()

  const addToCart = (product) => {
    // checking if the cartItems has some items in it or it is empty
    const searchArray = cartItems.filter((item) => item.id === product.id)

    if (searchArray.length === 0) {
      // then if it is empty add item then ans set the quantity to 1
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
    } else {
      // if the same item added to cart once again then this will increase its quantity
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      )
    }
  }

  return { cartItems, addToCart }
}

export default useItemCart
import { useProduct } from '../contexts/ProductsProvider'
import { ProductTypes } from '../types'

function useItemCart() {
  const { cartItems, setCartItems } = useProduct() ?? {
    cartItems: [],
    setCartItems: () => {},
  }

  // function to addtocart and increasing it
  function addProductToCart(product: ProductTypes, quantity = 1) {
    // checking if the cartItems has some items in it or it is empty
    const searchArray = cartItems.filter((item) => item.id === product.id)

    if (searchArray.length === 0) {
      // then if it is empty add item then ans set the quantity to 1
      setCartItems((prev) => [...prev, { ...product, quantity }])
    } else {
      // if the same item added to cart once again then this will increase its quantity
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 0) + quantity,
              }
            : item
        )
      )
    }
  }

  // function to decrease the cart order and eventually delete it when it goes to 0
  function removeProductFromCart(cart: ProductTypes) {
    if (cart.quantity === 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== cart.id))
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cart.id
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item
        )
      )
    }
  }

  // delete the from cart when trash icon click
  function deleteItemFromCart(cart: ProductTypes) {
    setCartItems((prev) => prev.filter((item) => item.id !== cart.id))
  }

  return {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    deleteItemFromCart,
  }
}

export default useItemCart

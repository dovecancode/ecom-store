import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

import { ProductTypes } from '../types'

export type ProductContenxtType = {
  products: ProductTypes[]
  cartItems: ProductTypes[]
  setProducts: Dispatch<SetStateAction<ProductTypes[]>>
  setCartItems: Dispatch<SetStateAction<ProductTypes[]>>
}

const ProductContext = createContext<ProductContenxtType | null>(null)

/** Below is for the Chrome React dev Tools extension
 * to display the name of the context instead
 * of "Context.provider"
 **/
ProductContext.displayName = 'ProductContexts'

function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductTypes[]>([])

  const [cartItems, setCartItems] = useState<ProductTypes[]>([])

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        setCartItems,
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  return useContext(ProductContext)
}

export { ProductProvider, useProduct }

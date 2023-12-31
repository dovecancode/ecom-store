import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Cart, Home, Shop, SingleProduct } from './pages'
// import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index="*" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<SingleProduct />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
// import PageNotFound from './pages/PageNotFound'

import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
    // <BrowserRouter>
    //
    //   <Routes>
    //     <Route index="*" element={<Home />} />
    //     <Route path="shop" element={<Shop />} />
    //     <Route path="cart" element={<Cart />} />
    //     <Route path="product/:id" element={<SingleProduct />} />
    //     {/* <Route path="*" element={<PageNotFound />} /> */}
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App

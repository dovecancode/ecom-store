import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Home, Shop } from './pages'
// import PageNotFound from './pages/PageNotFound'

BrowserRouter

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index="*" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

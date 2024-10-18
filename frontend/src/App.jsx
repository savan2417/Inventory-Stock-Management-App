import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Shop from "./Pages/shop"
import Footer from "./Components/Footer/Footer"
import banner_mens from "./Components/Assets/banner_mens.png"
import banner_women from "./Components/Assets/banner_women.png"
import banner_kids from "./Components/Assets/banner_kids.png"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} > </Route>
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} > </Route>
          <Route path="/womens" element={<ShopCategory banner={banner_women} category="women" />} > </Route>
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} > </Route>
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} ></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/login" element={<LoginSignup />} ></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App

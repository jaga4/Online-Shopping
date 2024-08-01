// import logo from './logo.svg';
// import './App.css';

import { HashRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./HomePage/HomeComponents";
import Product from "./ProductPage/Product";
import ProductView from "./ProductPage/ProductView";
import Category from "./CategoryComponent/Category";
import CartComponent from "./CartComponent/Cart";
import OrderSummary from "./OrderSummary/OrderSummary";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";
import AboutUsComponent from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import SearchPageComponent from "./SearchComponent/SearchComponent";



function App() {
  return (
    <div>
      {/* <HomeComponent/> */}
      {/* <BrowserRouter> */}
      <HashRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/products-view/:id" element={<ProductView/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/cart" element={<CartComponent/>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}></Route>
        <Route path="/about" element={<AboutUsComponent/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/search" element={<SearchPageComponent/>}></Route>
      </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

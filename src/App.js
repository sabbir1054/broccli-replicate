import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Header/Banner/Banner";
import Checkout from "./Pages/CheckoutPage/Checkout";
import HomePage from "./Pages/HomePage/HomePage";
import Wishlist from "./Pages/Wishlist/Wishlist";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="/cart" element={<Checkout></Checkout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

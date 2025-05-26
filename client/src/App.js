import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Home from "./scenses/home/Home";
import ItemDetails from "./scenses/itemDetails/ItemDetails";
import Navbar from './scenses/global/Navbar';
import Checkout from './scenses/checkout/Checkout';
import Confirmation from './scenses/checkout/Confirmation';
import CartMenu from './scenses/global/CartMenu';

const ScrollToTop =() =>{
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname])
  return null;
}

function App() {
  return <div className="App">
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
    </BrowserRouter>
  </div>
 
}
export default App;

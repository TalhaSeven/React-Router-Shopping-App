import { Route, Routes } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Campaigns from "./pages/Campaigns";
import BlackFriday from "./components/BlackFriday";
import Discounts from "./components/Discounts";
import BlackFriday3 from "./components/BlackFriday3";
import BlackFriday2 from "./components/BlackFriday2";
import BlackFriday1 from "./components/BlackFriday1";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/campaigns" element={<Campaigns />}>
          <Route path="blackfriday" element={<BlackFriday />}>
            <Route path="blackfriday1" element={<BlackFriday1 />} />
            <Route path="blackfriday2" element={<BlackFriday2 />} />
            <Route path="blackfriday3" element={<BlackFriday3 />} />
          </Route>
          <Route path="discounts" element={<Discounts />} />
        </Route>

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComp />
    </>
  );
}

export default App;

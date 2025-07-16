import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />

        <Routes>
          <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;

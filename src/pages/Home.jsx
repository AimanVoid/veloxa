import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <div id="top-products">
        <TopProducts handleOrderPopup={handleOrderPopup} />
      </div>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
    </>
  );
};

export default Home;

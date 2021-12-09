import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Description from "../components/Description";
import Categories from "../components/Categories";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Description/>
      <Slider />
      <Categories />
      <Footer/>
    </div>
  );
};

export default Home;

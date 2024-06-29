"use client";

import { register } from "swiper/element";
import ProductCard from "../components/cards/ProductCard";
import Banner from "../components/Home/Banner";
import NewestProduct from "../components/Home/NewestProduct";

register();

const Home = () => {
  return (
    <div className="px-3 sm:px-4 md:px-12 lg:px-36">
      <Banner />
      <NewestProduct />
    </div>
  );
};
export default Home;

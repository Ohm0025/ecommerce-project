import React from "react";
import Carousel from "../../component/carousel/Carousel";
import SearchBar from "../../component/searchBar/SearchBar";
import Category from "../../component/category/Category";
import Catalogue from "../../component/catalogue/Catalogue";

type Props = {};

let sampleSlides = [
  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612528443702-f6741f70a049?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="max-w-[600px] mx-[auto] my-[50px]">
        <Carousel slides={sampleSlides} />
      </div>
      <Category />
      <Catalogue />
    </div>
  );
};

export default HomePage;

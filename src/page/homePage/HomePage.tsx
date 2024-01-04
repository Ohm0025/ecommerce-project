import React from "react";
import Carousel from "../../component/carousel/Carousel";
import SearchBar from "../../component/searchBar/SearchBar";
import Category from "../../component/category/Category";
import Catalogue from "../../component/catalogue/Catalogue";

type Props = {};

let sampleSlides = [
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/99235753/original/db9bf5cc3855d76d7af92a4d9c43e8cea5f75a34/design-creative-web-banners-sliders-carousel.jpg",
  "https://www.latestkurtidesigns.com/wp-content/uploads/2021/07/Online-Shopping-With-Latest-Kurti-Designs-Ethnic-Wear-Store-2.png",
  "https://www.latestkurtidesigns.com/wp-content/uploads/2020/02/saree-collection.jpg",
  "https://backend.tops.co.th/media/wysiwyg/10.10_Tops_online_Mega_deals-pae_Hero-en_1.jpg",
];

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col sm:w-[80%] sm:m-auto">
      <Carousel slides={sampleSlides} />
      <Category />
      <Catalogue />
      {/* <Category />
      <Catalogue /> */}
    </div>
  );
};

export default HomePage;

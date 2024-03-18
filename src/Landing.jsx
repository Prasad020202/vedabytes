import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import Laptop from "./assets/hero/5.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import ProductCard from "./components/Products/ProductCard.jsx";
// import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import Test from "./components/Test.jsx"
import styled from "styled-components";
// import MyContext from "./Context/MyContext.js";



import Lappy from "./components/Bestsellers/Lappy.jsx"
import Print from "./components/Bestsellers/Print.jsx";
import Desktops from "./components/Bestsellers/Desktops.jsx";


const Navcont=styled.div`
z-index: 11;
  

  position: sticky;
  top: 0;
  background-color: white;
  
`

const BannerData = {
    discount: "Bestsellers",
    title: "Refurbished Laptops",
    date: "This Month",
    image: Laptop,
    title2: "Bestselling laptops for this month , grab this opportunity fast",
    title3: "Summer Sale",
    title4:
      "Click the Button below to see all the products",
    bgColor: "#f42c37",
  };
  
  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
  };

const Landing = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
    }, []);

    // const context = useContext(MyContext);

    // const name = context;

  return (
    <>
    <Navcont><Navbar handleOrderPopup={handleOrderPopup} /></Navcont>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    
    <Hero handleOrderPopup={handleOrderPopup} />
    <Category />
    <Category2 />
    <Services />
    <Banner data={BannerData} />
    {/* <Products /> */}
    {/* <ProductCard/> */}



    <Lappy/>

    <Banner data={BannerData2} />
    {/* <Products /> */}
    {/* <ProductCard/> */}




    <Print/>

    <Banner data={BannerData} />
    {/* <Products /> */}
    {/* <ProductCard/> */}

    <Desktops/>
    
    <Partners />
    <Blogs />
    {/* <Test/> */}
    <Footer />
    {/* {name} */}
    <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
  </div>
  </>
  )
}

export default Landing
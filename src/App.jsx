import React from "react";
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

import Test from "./components/Test.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing.jsx";
import Signup from "./Auth/Signup.jsx";
import SignIn from "./Auth/SignIn.jsx";
import { NotFound } from "./NotFound.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import { AddProductPage } from "./Admin/AddProductPage.jsx";
import UpdateProductPage from "./Admin/UpdateProductPage.jsx";
import { UserDashboard } from "./components/User/UserDashboard.jsx";

import { HomePageProduct } from "./components/HomePageProduct/HomePageProduct.jsx";
import MyState from "./Context/Mystate.jsx";
import { ProtectedRouteForAdmin } from "./ProtectedRoutes/AdminRoute.jsx";
import { ProductInfo } from "./components/ProductInfo/ProductInfo.jsx";


const BannerData = {
  discount: "Bestsellers",
  title: "Refurbished Laptops",
  date: "This Month",
  image: Laptop,
  title2: "Bestselling laptops for this month , grab this opportunity fast",
  title3: "Summer Sale",
  title4: "Click the Button below to see all the products",
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

const App = () => {
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

  return (
  
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/*" element={<NotFound />} />

            {/* <Route  path="/admindashboard" element={
              <ProtectedRouteForAdmin>
            <AdminDashboard />
            </ProtectedRouteForAdmin>
            }>
    
            </Route> */}
  
            <Route path="/admindashboard" element={<AdminDashboard />} />

            <Route path="/admindashboard/addproduct" element={<AddProductPage />} />
            <Route path="/admindashboard/updateproduct/:id" element={<UpdateProductPage />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/homeProducts" element={<HomePageProduct />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </MyState>
    
  );
};

export default App;

import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Pagination from "./Pagination";
import ProductBanner from "./ProductBanner";
import ShopSideNav from "./ShopSideNav";
import Nav from "../Navbar/Navbarsec"
import styled from "@emotion/styled";
import Slidercomp from "./Slidercomp"

const Maindiv = styled.div`
/* background-color: aqua; */
min-height: fit-content;
overflow: hidden;
  


`

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>
    <Nav/>
    <div className="w-full h-[35vh]  mt-3 bg-slate-200">
      {/* <Slidercomp/> */}
      </div>
    
    <Maindiv className="max-w-container mx-auto px-4  ">
      {/* <div className=""><Breadcrumbs title="Products" /></div> */}
      
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10 ">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full"> */}
        <div className="w-[20%] lgl:w-[25%] mdl:inline-flex h-full">
        <div className=""><Breadcrumbs title="Products" />
        </div>

          <ShopSideNav/>
          
          
        </div>
        <div className=" w-3/4 mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10  mt-14">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          

          <Pagination itemsPerPage={itemsPerPage} />
          
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </Maindiv>
    </>
  );
};

export default Shop;

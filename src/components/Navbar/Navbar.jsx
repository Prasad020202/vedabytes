// import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import DarkMode from "./DarkMode";
// import { AiOutlineUser } from "react-icons/ai";

// const MenuLinks = [
//   {
//     id: 1,
//     name: "Bestsellers",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Refubnished Laptops",
//     link: "/#shop",
//   },
//   {
//     id: 3,
//     name: "Refubnished Printers",
//     link: "/#about",
//   },
//   {
//     id: 4,
//     name: "Refubnished Desktops",
//     link: "/#blog",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "FAQ",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Contact Us",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Repair",
//     link: "/#",
//   },
// ];






// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">


//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4 ">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
// "
//             >
//               VEDA
//             </a>
//             </div>




//             {/* Menu Items */}

//             <div className="hidden lg:block bg-slate-300">
//               <ul className="flex items-center gap-4">
//                 {MenuLinks.map((data, index) => (
//                   <li key={index}>
//                     <a
//                       href={data.link}
//                       className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                     >
//                       {" "}
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//                 {/* Dropdown  */}
//                 <li className="relative cursor-pointer group">
//                   <a
//                     href="#"
//                     className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                   >
//                     Quick Links
//                     <span>
//                       <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                     </span>
//                   </a>

//                   {/* Dropdown Links */}
//                   <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
//                     <ul className="space-y-2">
//                       {DropdownLinks.map((data, index) => (
//                         <li>
//                           <a
//                             className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                             href={data.link}
//                           >
//                             {data.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
          

          // {/* Navbar Right section */}
          // <div className="flex justify-between items-center gap-4 ">
          //   {/* Search Bar section */}
          //   <div className="relative group hidden sm:block">
          //     <input
          //       type="text"
          //       placeholder="Search"
          //       className="
          //     search-bar
          //     "
          //     />
          //     <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          //   </div>

          //   {/* Order-button section */}
          //   <button className="relative p-3" onClick={handleOrderPopup}>
          //     <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
          //     <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
          //       4
          //     </div>
          //   </button>


          //   {/* Profile section */}


          //   <div >
          //   <AiOutlineUser />
          //   </div>
          // </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// // overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center













import React , {useState}from 'react'
import styled from 'styled-components'
import Logol from './Logol'
import Button from './Button'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";





const section = styled.section`
 width: 100vw;
 background-color: white;


`
const NavBar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 5rem;
margin: 0 auto;

.mobile{
  display: none;
}
@media (max-width: 64em){

  .desktop{
    display: none;
  }
  .mobile{
  display: inline-block;
}
}

`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em) {
  //1024px

  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 5rem);
  z-index:50;
  background-color:rgba(255,255,255,0.85);
  backdrop-filter: blur(2px);

  transform: ${props => props.click ? 'translateY(0)':'translateY(1000%)'};
  transition: 0.3s ease;




  flex-direction: column;
  justify-content: center;
  
}




`
const MenuItems = styled.li`

margin: 0 1rem;
color: black;
cursor: pointer;

&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: black;
  transition: width 0.3s ease;


}
&:hover::after{
 width: 100%;
}

@media (max-width: 64em) {
  margin: 1rem 0;
  &::after{
  display: none;


}


}


`

const HamburgerMenu =styled.span`
width: ${props => props.click ? '2rem':'1.5rem'};
height: 2px;
background: black;

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)':'translateX(-50%) rotate(0)'};

display: none;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.3s ease;
@media (max-width: 64em) {
  //1024px

  display: flex;
  
}

&::after,&::before{
  content: '';
  width: ${props => props.click ? '1rem':'1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px':'0rem'};;
  background: black;
  position: absolute;
transition: all 0.3s ease;

}
&::after{
  top: ${props => props.click ? '0.3rem':'0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)':'rotate(0)'};
}
&::before{
  bottom: ${props => props.click ? '0.3rem':'0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)':'rotate(0)'};

}




`

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    console.log('Scrolling to:', id);
    const element = document.getElementById(id);
    console.log('Element:', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setClick(!click);
  };

  return (
    <section id="navigation">
      <NavBar>
        <Logol/>
        <HamburgerMenu click={click} onClick={()=> setClick(!click)}>

          &nbsp;
        </HamburgerMenu>
        <Menu click={click} >
          <MenuItems onClick={() => scrollTo('Home')}>Best Sellers</MenuItems>
          <MenuItems onClick={() => scrollTo('About')}>Refurbished Laptops</MenuItems>
          <MenuItems onClick={() => scrollTo('Roadmap')}>Refurbished Printers</MenuItems>
          <MenuItems onClick={() => scrollTo('Roadmap')}>Refurbished Desktops</MenuItems>
          <MenuItems onClick={() => scrollTo('Roadmap')}>Accessories</MenuItems>
          <MenuItems>
          <div className="mobile">
            {/* <Link to="/auth/Login"> */}


              {/* <Button text ="Login / SignUP" /> */}
          {/* </Link> */}





                              {/* Navbar Right section */}
                              <div className="flex justify-between items-center gap-4 ">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3" >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                0
              </div>
            </button>


            {/* Profile section */}


            <div >
            <AiOutlineUser />
            </div>
          </div>














        </div>  
          </MenuItems>

        </Menu>
        <div className="desktop">
        {/* <Link to="/auth/Login"> */}


        {/* <Button text ="Login / SignUP" /> */}
          {/* </Link> */}





                    {/* Navbar Right section */}
                    <div className="flex justify-between items-center gap-4 ">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3" >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                0
              </div>
            </button>


            {/* Profile section */}


            <div >
            <AiOutlineUser />
            </div>
          </div>


          





        </div>  
        
      </NavBar>

    </section>
  )
}

export default Navigation

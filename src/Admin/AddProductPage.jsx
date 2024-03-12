import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Auth/Firebase";
import { toast } from "react-toastify";

export const AddProductPage = () => {
<<<<<<< HEAD
=======

>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const [product, setProduct] = useState({
    Product_Name: "",
    Brand: "",
    category: "",
    Description: "",
    Price: "",
    keywords: "",
    thumbnail_img: "",
    img_collection: [],
<<<<<<< HEAD
    specifications: {},
  });

  const [productimg1, setProductimg1] = useState("")
  const [productimg2, setProductimg2] = useState("")
  const [productimg3, setProductimg3] = useState("")
  const [productimg4, setProductimg4] = useState("")
=======
    specifications: {}
  });

  
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setProduct({
      ...product,
<<<<<<< HEAD
      category: event.target.value,
    });
  };

  const handleSpecificationChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      specifications: {
        ...product.specifications,
        [name]: value, // Dynamically update the specifications object
      },
    });
  };
=======
      category: event.target.value
    });
 };

 const handleSpecificationChange = (event) => {
  const { name, value } = event.target;
  setProduct({
    ...product,
    specifications: {
      ...product.specifications,
      [name]: value // Dynamically update the specifications object
    }
  });
};

>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556

  // Function to render the input field based on the selected category
  const renderInputField = () => {
    switch (selectedCategory) {
      case "Laptop":
        return (
          <>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Storage
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="256 GB"
<<<<<<< HEAD
                  name={"Storage"}
=======
                  name = {"Storage"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Processor
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="intel i5"
<<<<<<< HEAD
                  name={"Processor"}
                  onChange={handleSpecificationChange}
                />
              </div>
=======
                  name = {"Processor"}
                  onChange={handleSpecificationChange}
                />
              </div>
              
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Screen Size
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="14 Inches"
<<<<<<< HEAD
                  name={"Screen_Size"}
=======
                  name = {"Screen_Size"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  RAM Memory
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="8 GB"
<<<<<<< HEAD
                  name={"RAM_Memory"}
=======
                  name = {"RAM_Memory"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Display
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
<<<<<<< HEAD
                  name={"Display"}
=======
                  name = {"Display"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Grapics
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="iRIS"
<<<<<<< HEAD
                  name={"Grapics"}
=======
                  name = {"Grapics"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Black"
<<<<<<< HEAD
                  name={"Colour"}
=======
                  name = {"Colour"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Operating System
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Windows"
<<<<<<< HEAD
                  name={"Operating_System"}
=======
                  name = {"Operating_System"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Security/RGB"
<<<<<<< HEAD
                  name={"Special_Features"}
=======
                  name = {"Special_Features"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
          </>
        );
      case "Desktops":
        return (
<<<<<<< HEAD
          <>
=======
            <>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Storage
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="256 GB"
<<<<<<< HEAD
                  name={"Storage"}
=======
                  name = {"Storage"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Processor
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="intel i5"
<<<<<<< HEAD
                  name={"Processor"}
=======
                  name = {"Processor"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Display
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
<<<<<<< HEAD
                  name={"Display"}
=======
                  name = {"Display"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Operating System
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Windows/Mac"
<<<<<<< HEAD
                  name={"Operating_System"}
=======
                  name = {"Operating_System"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Storage
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="8 GB"
<<<<<<< HEAD
                  name={"Storage"}
=======
                  name = {"Storage"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Model Name
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
<<<<<<< HEAD
                  name={"Model_Name"}
=======
                  name = {"Model_Name"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Grapics
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="iRIS"
<<<<<<< HEAD
                  name={"Grapics"}
=======
                  name = {"Grapics"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Black"
<<<<<<< HEAD
                  name={"Colour"}
=======
                  name = {"Colour"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
<<<<<<< HEAD
                  name={"Special_Features"}
=======
                  name = {"Special_Features"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  placeholder="Security/RGB"
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
<<<<<<< HEAD
          </>
        );
      case "Printer":
        return (
          <>
=======
            </>
        );
      case "Printer":
        return (
            <>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Connectivity Type
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="USB"
<<<<<<< HEAD
                  name={"Connectivity_Type"}
=======
                  name = {"Connectivity_Type"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Colour"
<<<<<<< HEAD
                  name={"Colour"}
=======
                  name = {"Colour"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Weight
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="5 KG"
<<<<<<< HEAD
                  name={"Weight"}
=======
                  name = {"Weight"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Printing Technology
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
<<<<<<< HEAD
                  name={"Printing_Technology"}
=======
                  name = {"Printing_Technology"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Model Number
                </label>
<<<<<<< HEAD

=======
                
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
<<<<<<< HEAD
                  name={"Model_Number"}
=======
                  name = {"Model_Number"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Max. Print Speed
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
<<<<<<< HEAD
                  name={"Max_Print_Speed"}
=======
                  name = {"Max_Print_Speed"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
<<<<<<< HEAD
                  name={"Special_Features"}
=======
                  name = {"Special_Features"}
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
<<<<<<< HEAD
          </>
=======
            </>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
        );

      case "Accessories":
        return (
<<<<<<< HEAD
          <>
=======
            <>

>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="Special_Features"
                  type="text"
                  placeholder=""
                  onChange={handleSpecificationChange}
                />
              </div>
<<<<<<< HEAD
            </div>
          </>
        );
      default:
        return <></>;
    }
  };

  const SubmitHandler = async (e) => {
=======

            </div>
            </>
        );
      default:
        return (
          <>
          </>
        );
    }
  };

  const SubmitHandler = async(e) => {
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
    e.preventDefault();

    try {
      console.log(product);
<<<<<<< HEAD
      const productRef = collection(db, "Products");
      await addDoc(productRef, product);
      setProduct({
        // Reset the form
        Product_Name: "",
        Brand: "",
        category: "",
        Description: "",
        Price: "",
        keywords: "",
        thumbnail_img: "",
        img_collection: [],
        specifications: {},
      });
      navigate("/admindashboard");
    } catch (error) {
      console.log(error);
      toast.error("Add Product Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form class="w-full max-w-lg m-10">
        <h2 className=" text-2xl font-bold my-14 text-center">
          Add New Product
        </h2>
=======
        const productRef = collection(db, "Products");
        await addDoc(productRef, product);
        setProduct({ // Reset the form
          Product_Name: "",
          Brand: "",
          category: "",
          Description: "",
          Price: "",
          keywords: "",
          thumbnail_img: "",
          img_collection: [],
          specifications: {}
        });
        navigate("/admindashboard");

    } catch (error) {
        console.log(error);
        toast.error("Add Product Failed");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      
      <form class="w-full max-w-lg m-10">
      <h2 className=" text-2xl font-bold my-14 text-center">Add New Product</h2>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="ASUS VIVOBOOK"
              value={product.Product_Name}
<<<<<<< HEAD
              onChange={(e) => {
                setProduct({
                  ...product,
                  Product_Name: e.target.value,
                });
=======
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Product_Name: e.target.value
                    }
                )
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
              }}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Brand
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="ASUS"
              value={product.Brand}
<<<<<<< HEAD
              onChange={(e) => {
                setProduct({
                  ...product,
                  Brand: e.target.value,
                });
              }}
            />
          </div>
        </div>
=======
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Brand: e.target.value
                    }
                )
              }}
              
            />
          </div>
        </div>

>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
        <div class="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="">Please Select</option>
                <option value="Laptop">Laptop</option>
                <option value="Desktops">Desktops</option>
                <option value="Printer">Printer</option>
                <option value="Accessories">Accessories</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="45000"
              value={product.Price}
<<<<<<< HEAD
              onChange={(e) => {
                setProduct({
                  ...product,
                  Price: e.target.value,
                });
=======
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Price: e.target.value
                    }
                )
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
              }}
            />
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Description
            </label>

            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="ASUS vivobook 15 with 256 HDD"
              value={product.Description}
<<<<<<< HEAD
              onChange={(e) => {
                setProduct({
                  ...product,
                  Description: e.target.value,
                });
=======
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Description: e.target.value
                    }
                )
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
              }}
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Keywords
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>

<<<<<<< HEAD

        {/* //images for the product 1st image will be the thumnail */}

        {/* <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Add Image
            </label>

            <input
              type="file"
              onChange={(e) => setProductimg1(e.target.files[0])}
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Add Image
            </label>
            <input
              type="file"
              onChange={(e) => setProductimg2(e.target.files[0])}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Add Image
            </label>

            <input
              type="file"
              onChange={(e) => setProductimg3(e.target.files[0])}
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Add Image
            </label>
            <input
              type="file"
              onChange={(e) => setProductimg4(e.target.files[0])}
            />
          </div>


        </div> */}


        <h3 className="text-xl font-bold my-10">Specifications</h3>
        {renderInputField()}
        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={SubmitHandler}
        >
          Save Product
        </button>
      </form>
=======
        <h3 className="text-xl font-bold my-10">Specifications</h3>

        {renderInputField()}

        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={SubmitHandler}>
            Save Product
        </button>

      </form>


>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
    </div>
  );
};

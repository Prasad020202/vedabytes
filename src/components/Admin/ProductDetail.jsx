import React, { useContext } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../Context/MyContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Auth/Firebase";
import { toast } from "react-toastify";


export const ProductDetail = () => {
  const navigate =  useNavigate();
  
=======
import { Link } from "react-router-dom";
import myContext from "../../Context/MyContext";


export const ProductDetail = () => {
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
  const context = useContext(myContext);

  const{getAllProduct} = context;

  console.log(getAllProduct);

<<<<<<< HEAD
  const HandleDelete = (id) => {
    
    const deleteRef  = doc(db, "Products", id);

    deleteDoc(deleteRef).then(() => {
      console.log("Entire Document has been deleted successfully.")
      alert("Product is Deleted!")
  })
  .catch(error => {
      console.log(error);
  })
  }

=======
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-pink-300 font-bold">All Product</h1>
        {/* Add Product Button  */}
<<<<<<< HEAD
        <Link to={"/admindashboard/addproduct"}>
=======
        <Link to={"/addproduct"}>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
          <button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">
            Add Product
          </button>
        </Link>
      </div>
      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Description
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {
              getAllProduct.map((item, index) => {
                const{id, Product_Name, Brand, Price, Description, category} = item    
                return (
                  <tr key={index} className="text-pink-300">
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                {index+1}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                {Product_Name}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                {Brand}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                ₹{Price}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                {category}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                {Description}
              </td>
<<<<<<< HEAD
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer " ><button onClick={(e)=>{e.preventDefault(); navigate(`/admindashboard/updateproduct/${id}`) }}>Edit</button></td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "><button onClick={(e) => {e.preventDefault(); 
                HandleDelete(id);}}>Delete</button></td>
=======
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "><Link to={"/admindashboard/updateproduct"}>Edit</Link></td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">Delete</td>
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
            </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

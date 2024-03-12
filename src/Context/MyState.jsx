/* eslint-disable react/prop-types */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Auth/Firebase";
import MyContext from "./MyContext";
// import MyContext from './myContext';
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";

function myState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllProduct, setGetAllProduct] = useState([]);
<<<<<<< HEAD
  const [getAllUser, setGetAllUser] = useState([]);
=======
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556

  /**========================================================================
   *========================================================================**/

  const getAllProductFunction = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));

    let productArray = [];
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

<<<<<<< HEAD
=======


>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
      productArray.push({ ...doc.data(), id: doc.id });

    });
    setGetAllProduct(productArray);
  };

<<<<<<< HEAD
  const getAllUserFunction = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    let UserArray = [];
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      UserArray.push({ ...doc.data(), id: doc.id });

    });
    setGetAllUser(UserArray);
  };

  useEffect(() => {
    getAllProductFunction();
    getAllUserFunction();
=======
  useEffect(() => {
    getAllProductFunction();
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
  }, []);
  return (
    <MyContext.Provider
      value={{
<<<<<<< HEAD
        getAllProduct,
        getAllUser
=======
        getAllProduct
>>>>>>> 426321214d3ea17288a22dd18d88bc77d363d556
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default myState;

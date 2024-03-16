import { Link } from 'react-router-dom';
import Product from './Product';
import mac from "../Productscards/macbook.jpg"; 
// import Testcard from "../../Testcard"


const Lappy = () => {


    return (
      <div className="mb-10 mx-28">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">


        
       
        <Product

        _id="100002"
        img={mac}
        productName="Macbook"
        price="250.00"
        badge={true}
        
        
        />
        
        
        
  
  
  
      </div></div>
    );
  };
  
  export default Lappy;
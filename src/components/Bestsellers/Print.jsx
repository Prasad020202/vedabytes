import { Link } from 'react-router-dom';
import Product from './Product';
import mac from "../Productscards/macbook.jpg"; 


const Print = () => {


    return (
      <div className="mb-10 mx-28">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
       
        <Product

        _id="100003"
        img={mac}
        productName="HP Printer"
        price="150.00"
        badge={true}
        
        
        />


        <Product

        _id="100004"
        img={mac}
        productName="DELL Printer"
        price="450.00"
        badge={true}


        />
        
        
  
  
  
      </div></div>
    );
  };
  
  export default Print;
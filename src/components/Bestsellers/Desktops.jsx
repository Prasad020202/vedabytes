import { Link } from 'react-router-dom';
import Product from './Product';
import mac from "../Productscards/macbook.jpg"; 


const Desktops = () => {


    return (
      <div className="mb-10 mx-28">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
       
        <Product

        _id="100005"
        img={mac}
        productName="HP"
        price="650.00"
        badge={true}
        
        
        />


        <Product

        _id="100006"
        img={mac}
        productName="DELL"
        price="400.00"
        badge={true}


        />
        <Product

          _id="100007"
          img={mac}
          productName="Asus"
          price="550.00"
          badge={true}


          />
        
        
  
  
  
      </div></div>
    );
  };
  
  export default Desktops;
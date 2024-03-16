// Import necessary dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import one from "./image.png"
import { FaDisplay } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";
import { FaMicrochip } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdStorage } from "react-icons/md";
import Circle from '@uiw/react-color-circle';
import { FaRupeeSign } from "react-icons/fa";
// import ReactImageMagnify from 'react-image-magnify';
import Sfooter from "../Footer/Sfooter"
import ImageMagnifier from "./ImageMagnifier";
import IncrementDecrementBtn from "./IncrementDecrementBtn";
import Navs from "../Navbar/Navbarsec"


// const IMG_URL = {one};



// Styled components
const MainWrapper = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

const Container = styled.div`

  /* max-width: 1000px; */
  max-width: 95%;

  padding: 0 1rem;
  margin: 0 auto;
  
`;

const ProductDiv = styled.div`
  margin: 1rem 0;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  border-radius: 3px;
  column-gap: 10px;
`;

const ProductDivLeft = styled.div`
  padding: 20px;
`;

const ProductDivRight = styled.div`
display: flex;
flex-direction: column;
  padding: 20px;
  .pminus{
    margin-top: 2%;
    margin-bottom: 2%;


  }
  `;

const ImgContainer = styled.div`
  img {
    /* width: 200px; */
    width: 80%;

    margin: 0 auto;
  }
`;

const HoverContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const HoverImageContainer = styled.div`
  border: 2px solid rgba(174, 160, 252, 0.7);
  padding: 1rem;
  border-radius: 3px;
  margin: 0 4px 8px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 50px;
  }

  &.active {
    border-color: rgb(145, 145, 255)!important;
  }

  &:hover {
    border-color: rgb(145, 163, 255);
  }
`;
const Productdesc =styled.div`
/* background-color: aquamarine  ; */
width: 95%;
p{
  text-align: justify;
  @media (max-width:64em){
    font-size: 10px;
    
  }
}
  

`
const Specifications = styled.div`
margin-top: 5%;

`

const Detailed = styled.div`
display: flex;
flex-direction: column;
padding: 2%;
  


`
const Desc = styled.div`
display: flex;
align-items: center;
margin-left: 2%;

  


`
const Specif=styled.div`
display: flex;
  /* background-color: aquamarine; */
  padding: 0.2%;
  margin-bottom: 1%;
  align-items: center;

`


const ButtonGroups = styled.div`
  margin-top: 22px;
  /* margin-left: 15%; */
`;

const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  font-family: inherit;
  text-transform: uppercase;
  padding: 15px 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 15px;

  .fas {
    margin-right: 8px;
  }
`;

const Colorpall=styled.div`

  
`
const Colorcontainer=styled.div`
padding: 1%;
margin-top: 2%;
  

`

const Buttoncontainer = styled.div`
background-color: aqua;


`
const AddCartButton = styled(Button)`
  background-color: #00a2ff;
  border: 2px solid #006eff;
  margin-right: 8px;
  width: 20%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  

  &:hover {
    background-color: #fff;
    color: #0080ff;
  }
`;
const BuyNowButton = styled(Button)`
  background-color: #000;
  border: 2px solid #000;
  width: 20%;
  /* height: 6vh; */
  font-size: 12px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const ProductName = styled.span`
  font-size: 26px;
  margin-bottom: 2%;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.9;
  
`;
const Productprice=styled.div`
align-items: center;
display: flex;
font-weight: 700;
font-size: 20px;
margin-bottom: 2%;


`
const ColorSelector = styled.select`
  margin-top: 10px;
  padding: 8px;
`;

// Define your functional component
const Product = () => {
  // State for active image
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('default');

  // Image data
  const images = [{one}, {one}, {one}, {one}];

  // Event handler for image hover
  const handleImageHover = (index) => {
    setActiveImage(index);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
    <Navs/>
    <MainWrapper>
      
      <Container>
        <ProductDiv>
          <ProductDivLeft>
            <ImgContainer>
              {/* <img src={one} alt="watch" /> */}

              {/* <div style={{ position: 'relative' }}>
  <ReactImageMagnify {...{
    smallImage: {
      alt: '',
      isFluidWidth: true,
      src: one
    },
    largeImage: {
      src: one,
      fadeDurationInMs: 300,
      
      width: 600,
      height: 900
    },
    
    style: {
      
    }
  }} />
</div> */}



    <ImageMagnifier imgUrl={one} />
  

            </ImgContainer>
            <HoverContainer>
              {images.map((image, index) => (
                <HoverImageContainer
                  key={index}
                  className={index === activeImage ? 'active' : ''}
                  onClick={() => handleImageHover(index)}
                >
                  <img src={one} alt={`watch ${index + 1}`} />

                  













                </HoverImageContainer>
              ))}
            </HoverContainer>
            


            
            
          </ProductDivLeft>
          <ProductDivRight>
            <ProductName>Dell inspiron 5000</ProductName>
            <Productprice><FaRupeeSign /> 35000</Productprice>
            {/* Add the rest of your components here */}
            <Productdesc>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat, cupiditate quaerat reiciendis quos accusantium, doloremque obcaecati dolore nostrum voluptatibus repellat eaque accusamus! Repudiandae aspernatur ex rem nisi quos repellat!</p>
            </Productdesc>
            {/* <ColorSelector onChange={handleColorChange}>
              <option value="default" disabled>
                Select Color
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              
            </ColorSelector> */}

            <Specifications>
            <h1><strong>SPECIFICATIONS</strong></h1>
            <Detailed>
              <Specif><FaMicrochip /><Desc>4 GB</Desc></ Specif>
              <Specif><GiProcessor /><Desc>intel</Desc></ Specif>
              <Specif><FaDisplay /><Desc>14-inch HD</Desc></Specif>
              <Specif><RiSecurePaymentLine /><Desc> Fingerprint Reader, TPM Technology</Desc></Specif>
              <Specif><MdStorage /><Desc> 256gb SSD</Desc></Specif>
            </Detailed>
            </Specifications>

            {/* <Colorpall><h1><strong>Available Colors</strong></h1>
            <Colorcontainer>

            <Circle
              colors={[ '#000000', '#c2c2c2' ]}
              /></Colorcontainer>


            </Colorpall> */}
            <div className='pminus'>
            <IncrementDecrementBtn minValue={1} maxValue={10} /></div>
            <ButtonGroups>
              <AddCartButton type="button">add to cart</AddCartButton>
              <BuyNowButton type="button"><i className="fas fa-wallet"></i>buy now</BuyNowButton>
            </ButtonGroups>

            


            
          </ProductDivRight>
        </ProductDiv>
      </Container>
      
    </MainWrapper>
    <Sfooter/>
    </>
  );
};

// Export your component
export default Product;

import React, { useRef  } from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Section =styled.section`

height: auto;
min-height: 50vh;
width: 100%;
position: relative;
color: black;



display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



`

const Title = styled.h1`

font-size: 3em;
text-transform: uppercase;
color: black;

margin: 1rem auto;
border-bottom: 2px black;
width: fit-content;

@media (max-width: 48em){
    font-size: 2em;

}

`
const Container =styled.div`

width: 75%;
margin:2rem auto;

display: flex;
justify-content: space-between;
align-content: center;


@media (max-width: 64em){
    width: 80%;

}
@media (max-width: 48em){
    width: 90%;
    flex-direction: column;
    &>*:last-child{
        &>*:first-child{
            margin-top: 0;
        }

    }

}

`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
    width: 90%;
    align-self: center;

}



`

const Faq = () => {
    const ref = useRef(null);
   
    // gsap.registerPlugin(ScrollTrigger);
    // useLayoutEffect(() => {
    //   let element = ref.current;
    //   ScrollTrigger.create({
    //     trigger: element,
    //     start:'top top',
    //     end:'bottom top',
    //     pin:true,
    //     pinSpacing:false,
    //     scrub:true,

    //   })
    
    //   return () => {
    //     ScrollTrigger.kill();
        
    //   };
    // }, [])
  return (
    <Section ref={ref}>

        {/* <Title>
            Faq
        </Title> */}

        <Container>
            <Box>
                <Accordion title="Which Tech Stack Is Being Used In This Project?">
                    React.js, Tailwind, Firebase

                </Accordion>
                <Accordion title="Where It Is Hosted?">
                    To the Firebase

                </Accordion>
                
            </Box>
            <Box>
            <Accordion title="What Are You Trying To Solve?">
                    To Convert Boring Business Cards Into Cool MiniPages.

                </Accordion>
                <Accordion title="How can I share my MiniWeb Page with others?">
                    You can share through Link which has an unique ID of yours and your username.

                </Accordion>
                
            </Box>
            
        </Container>
    </Section>
  )
}

export default Faq
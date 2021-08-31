import { ImageAspectRatioRounded } from "@material-ui/icons";
import react from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";

import Title from "../Components/Title";
import {MainLayout} from '../styles/Layouts';



function About(){
    return(
        <MainLayout>  
        <AboutStyled>
            
            < Title title={'About Me'} />
            <ImageSection/>
           
        </AboutStyled>
        
        </MainLayout>

    )
}
const AboutStyled = styled.div`
 
`;

export default About;
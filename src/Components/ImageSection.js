import React from 'react';
import styled from 'styled-components';
import about from "../img/about.jpg";
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyle>
            <div className="left-content">
                
            <img src={about} alt="about"/>    
            </div>    

        <div className="right-content">
            <div className="sub-title"> 
                <h4>I am<span>  Gaurav Shokhanda</span></h4>
            </div>  
            <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur.
            </p>
            <div className="about-info"> 
                    <div className="info-title"> 
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="info"> 
                    <span>
                        <p>: Gaurav</p>
                        <p>: 20</p>
                        <p>: Indian</p>
                        <p>: English,Hindi</p>
                        <p>: Noida,UP</p>

                        </span>    
                    </div>


            
            </div>  
            <PrimaryButton title={'Download Cv'}/>
        </div>      
        </ImageSectionStyle>
    )
}

const ImageSectionStyle = styled.div`
    margin-top:0rem;
    display:flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }


.left-content{
    margin-top: 5rem;
    width:100%;
    
     img{
        width:280px;
        height:420px;
    }
}

.right-content{
    margin-top: 5rem;
    h4{
        font-size:2rem;
        color:var(--white-color);
        span{
            font-size:2rem;
        }
    }

    .paragraph{
        padding :1rem 0;
    }
    .about-info{
        display:flex;
    }
    .info-title{
        padding-right: 3rem;
        p{
            font-weight: 600;
        }
    }
    .info-title , .info{
        p{
            padding: .3rem 0;
        }
    }
}
`;
export default ImageSection;

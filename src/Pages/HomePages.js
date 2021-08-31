import React from 'react';
import styled from 'styled-components';
import Particles from '../Components/Particles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';


function HomePages() {
    return (
        <HomePageStyled>

            <div className="p-particles-js">

                <Particles/>

            </div> 
            
            <div className="typography">
                <h1>Hi, I'm <span>Gaurav Shokhanda</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque nihil voluptates ea dolore vel 
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
                </p>
                <div className="icons">
                  <div className="icon i-instagram"><InstagramIcon/></div>
                  <div className="icon i-github"><GitHubIcon/></div>
                  <div className="icon i-linked"><LinkedInIcon/></div>
                </div>
            </div>

            
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`

    width:100%;
    height:100vh;
    position:relative;

    .p-particles-js{
        position:relative;
        
    }
    .typography{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align:center;
        width:80%;
   }
    .icons{
        display:flex;
        justify-content: center;
        margin-top:1rem;

        .icon{
            border: 2px  solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius:50%;
            margin-right:1rem;
            cursor:pointer;
            &:hover{
                    border: 2px solid var(--primary-color);
            }
            svg{
                margin:1rem;
            
            }
        }
        
    
    }
`;

export default HomePages; 


import React from 'react';
import styled from "styled-components";
 
function Title({title}) {
    return (
        <TitleStyled> 
            <h1>{title} </h1>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`

position:relative;


h1{
    color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 11rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
}
`;

export default Title;
import React from 'react';
import styled from 'styled-components';


function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled =styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color:white;
    cursor:pointer;
    display:inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    &:hover::after{ 
        content:" ";
        position: absolute;
        width:100%;
        height:5%;
        background-color:var(--white-color);
        left:0;
        bottom:0;
        transition: all .4s ease-out;
        


    }

`;

export default PrimaryButton

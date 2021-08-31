import react from "react";
import {MainLayout, InnerLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import styled from "styled-components";
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';


function Contact(){
    const phone= <PhoneIcon/>
    const email = <EmailIcon/>
    const location = <LocationOnIcon/>
    return(
        <MainLayout>
            <Title title={'Contact'} />
            <ContactStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name">Enter Your Name</label>
                            <input type="text" id="name" placeholder="Your Name"/>
                      </div>
                    </form>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="email">Enter Your email</label>
                            <input type="text" id="mail" placeholder="Your email"/>
                      </div>
                    </form>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="Number">Enter Your Contact Number</label>
                            <input type="text" id="number" placeholder="Your Contact number"/>
                      </div>
                      <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="20" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>

                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'7017684236'} cont2={'7535821372'} />
                    <ContactItem title={'Email'} icon={email} cont1={'gauravshokanda2@gmail.com'} cont2={'gauravshokhandaa@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'Uttarpardesh'} cont2={'india'} />
                    
                </div>
            </InnerLayout>
            </ContactStyled>
        </MainLayout>
        

    )
}

const ContactStyled = styled.section` 
 .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    height:190px;
                    padding: .1rem .1rem;
                }
            }
            
        }
    }
   

`;
export default Contact;
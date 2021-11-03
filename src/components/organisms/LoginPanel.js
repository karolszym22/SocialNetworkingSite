import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
const ProfileContainer = styled.div`

width: 60%;
height: 100%;


`
const ProfileAccount = styled.div`

width: 100%;
min-height: 400px;
display: flex;
`
const AddLogo= styled.div`

width: 100%;
height: 75%;
display: flex;
justify-content: center;
align-items: center;

`
const Logo= styled.div`

font-size: 36px;
height: 50px;
width: 50px;
background-color: rgba(25,118,242,255);
border-radius: 50px;
box-sizing: border-box;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const ProfileName = styled.div`

width: 100%;
height: 25%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`
const ProfileImage = styled.div`

width: 160px;
border-radius: 10px;
margin: 15px 5px;
cursor: pointer;
height: 200px;
display: flex;
align-items:flex-end;
background-color: grey;
border: 1px solid rgb(223, 225, 230);
`

const AddProfile = styled.div`

width: 160px;
border-radius: 10px;
margin: 15px 5px;
cursor: pointer;
height: 200px;
flex-direction: column;
justify-content:flex-end;
background-color: rgba(245,246,247,255);
border: 1px solid rgb(223, 225, 230);
`

const FormContainer = styled.div`

width: 40%;
height: 100%;

padding-top: 30px;
display: flex;
flex-direction: column;
align-items: center;

`
const FormPanel = styled.div`

width: 90%;
height: 300px;
padding-top: 30px;
display: flex;
flex-direction: column;
border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 0px 3px 11px -1px rgba(197, 197, 203, 1);
-moz-box-shadow: 0px 3px 11px -1px rgba(197, 197, 203, 1);
box-shadow: 0px 3px 11px -1px rgba(197, 197, 203, 1);
background-color: white;
`

const Container = styled.div`
display: flex;
width: 70% ;
min-height: 550px;
max-width: 1000px;

`
const FieldsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;


`

const StyledInput = styled.input`
   height: 45px;
   margin: 7.5px 15px;
   border-radius: 7px;
   border:  1px solid rgb(223, 225, 230);
   outline: none;

   
`
const LoginButton = styled.button`
   height: 45px;
   margin: 15px 15px;
   border-radius: 7px;
   background-color: rgba(25,118,242,255);
   border: none;
   color: white;
   font-size: 16px;
   font-weight: bold;
   cursor: pointer;
`

const SignIn = () =>
( 
 <Container>
     <ProfileContainer>
         <h1 style={{ color: '#1877f2' }}>Facebook</h1>
         <h1 style={{ marginTop: '10px' }}>Ostatnie logowania</h1>
         <a style={{  color: '#767485', fontSize: '13px'  }}>Kliknij swoje zdjęcie lub dodaj konto</a>
         <ProfileAccount>
           <ProfileImage>
             <ProfileName>Karol</ProfileName>
           </ProfileImage>
           
             <AddProfile>
                <AddLogo>
                   <Logo>+</Logo>
                </AddLogo>
                <ProfileName><a style={{ color: 'rgba(25,118,242,255)' }}>Dodaj Konto</a></ProfileName>
             </AddProfile>
          
         </ProfileAccount>
     </ProfileContainer>
   <FormContainer>  
    <FormPanel>       
     <Formik>
      <FieldsContainer>
              <StyledInput
                type="text"
                name="username"
                placeholder="Login"
              />
               <StyledInput
                type="password"
                name="password"
                placeholder="Password"
              />
       
        <LoginButton type='submit'>Zaloguj się</LoginButton>
      </FieldsContainer>
    </Formik>
    </FormPanel>   
    </FormContainer>  
 </Container>
)
export default SignIn;    
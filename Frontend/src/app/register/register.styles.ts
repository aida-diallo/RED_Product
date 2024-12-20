'use client';


import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
   width: 100%; 
    height: 100vh;
    margin: 0;
    paddding: 0;
    background-image: url(/background.jpg);
    background-size: cover;
    background-position: center;
     background-repeat: no-repeat; 

     h1{
       color: white;
       font-weight: 700;
       text-align: center;
       font-size: 20px;
       margin-left: 10px;
     }
       img{
       width: 30px;
       height: 30px;
      margin-top: 10px

       }
`;
export const Icon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   
`;
export const FormContainer = styled.div`
    background-color: white;
    padding: 40px;
    padding-left: 40px;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px; 
`;

export const Input = styled.input`
    margin: 15px 0;
    padding: 10px;
   border: none; 
    border-bottom: 1px solid #D2D2D2;
    width: 100%; 
    justify-content: center;
    align-items: center;

     
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #45484B;
    color: white;
    border: none;

    border-radius: 4px;
    cursor: pointer;
    width: 100%;
   margin: 15px 0;
`;

export const LinkContainer = styled.div`
    
    text-align: center;


    a {
        color: #FCD34D; 
        text-decoration: none;
         margin: 10px 0;

       

        &:hover {
            text-decoration: underline; 
        }
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer; 
    padding: 0;
    position: relative;
    left: -80px;

    input{
    border: 4px solid #D2D2D2;
    }
`;

export const LabelText = styled.span`
    font-size: 16px; 
    display: flex;
     position: relative;
    left: -75px;
   

`;





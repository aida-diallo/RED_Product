'use client'; 


import React from 'react';
import { Container, FormContainer, Input, Button,
    LinkContainer, Label, LabelText } from './register.styles';
 import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push('/login'); 
    };

    return (
        <Container>
            <div>
            <img src="/icon.png"
             alt="icon" />
          <h1>RED PRODUCT</h1>
          </div>
            <FormContainer>
                <p>Inscrivez-vous en tant que Admin</p>
                <Input type="text" placeholder="Nom" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Mot de passe" required />
                <Label>
                        <Input type="checkbox" />
                        <LabelText>Accepter les termes et la politique</LabelText>
                    </Label>

                <Button type="submit">Se connecter</Button>
            </FormContainer>
            <LinkContainer>
            <div>
                        Vous n'avez pas de compte ?{' '}
                        <span onClick={handleRegisterClick} 
                        style={{ cursor: 'pointer', color: '#FCD34D'  }}>
                            Se connecter
                        </span>
                    </div>
                   
                </LinkContainer>
        </Container>
    );
};



export default RegisterPage;
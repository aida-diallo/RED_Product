
'use client'; 
import React from 'react';
import { Container, FormContainer, Input, Button,
   LinkContainer, Label, LabelText, Icon } from './login.styles';
   import Link from 'next/link';



const Login = () => {
    

    
    return (
        <Container>
        <Icon>
            <img src="/icon.png" alt="icon" />
          <h1>RED PRODUCT</h1>
          </Icon>
            <FormContainer>
                <p>Connectez-vous en tant que Admin</p>
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Mot de passe" required />
                <Label>
                        <Input type="checkbox" />
                        <LabelText>Gardezmoiconnecter</LabelText>
                    </Label>
                    <Link href="/dashboardLayout">
                <Button type="submit">Se connecter</Button></Link>
            </FormContainer>
            <LinkContainer>
            <div>
    <Link href="/password">Mot de passe oublié</Link>
</div>
<div>
    Vous n'avez pas de compte ?{' '}
    <Link href="/register">S'inscrire</Link> 
</div>
                </LinkContainer>
        </Container>
    );
};

export default Login;
'use client'; 


import React from 'react';

import { Container, FormContainer, Input, Button,
   LinkContainer, Icon } from './password'; 
   import Link from 'next/link';



const Password = () => {

    return (
        <Container>
        <Icon>
            <img src="/icon.png" alt="icon" />
          <h1>RED PRODUCT</h1>
          </Icon>
            <FormContainer>
            <h2>Mot de passe oublié?</h2>
                <p>Entrez votre adresse e-mail ci-dessous et 
                    nous vous envoyons des instructions sur la facon de
                     modifier votre mot de passe.
                </p>
                <Input type="email" placeholder="Votre e-mail" required />

                <Button type="submit">Se connecter</Button>
            </FormContainer>
            <LinkContainer>
     <div>
    Revenir à  la {' '}
    <Link href="/login">Connexion</Link> 
     </div>
                </LinkContainer>
        </Container>
    );
};


export default Password;
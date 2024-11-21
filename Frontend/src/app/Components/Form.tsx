

import FormLink from './FormLink'; 
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #f8f8f8;
`;

const Navigation = () => {
    return (
        <Form>
            <FormLink href="/login">Login</FormLink>
            <FormLink href="/register">Register</FormLink>
            <FormLink href="/forgot-password">Mot de passe oublié</FormLink>
        </Form>
    );
};

export default Navigation;
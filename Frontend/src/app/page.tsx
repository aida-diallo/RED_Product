
'use client';

import React from 'react';
import '../../src/app/globals.css';
import Login from './login/page';
import { Container, Main} from './styles'
import RegisterPage from './register/page';
import DashboardLayout from './dashboard/layout';

const HomePage = () => {
    return (
        <DashboardLayout>
             <Container>
            <Main>
               
            </Main>
            </Container>
        </DashboardLayout>
    );
};

export default HomePage;
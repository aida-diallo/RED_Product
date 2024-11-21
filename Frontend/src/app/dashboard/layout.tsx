
'use client';
import styled from 'styled-components';
import React, { useState } from 'react';
import Navbar from '../Components/iu/navbar/navbar';
import Sidebar from '../Components/iu/Sidebar/sidebar';

const Main = styled.main`
  width: 100%;
  display: flex;
`;

const Monsidebar = styled.div`
  display: flex;
  width: 20%;
`;

const Monasidebar = styled.div`
  width: 80%;

  
`;

const DashboardLayout = ({ children }) => {
  const [navbarTitle, setNavbarTitle] = useState('Dashboard'); 

  const handleSelect = (title: string) => {
    setNavbarTitle(title); 
  };

  return (
    <Main>
      <Monsidebar>
        <Sidebar onSelect={handleSelect} /> 
      </Monsidebar>
      <Monasidebar>
        <Navbar title={navbarTitle} /> 
        {children}
      </Monasidebar>
    </Main>
  );
};

export default DashboardLayout;
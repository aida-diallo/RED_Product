'use client';
import React, { useState } from 'react';
import { Nav, SectionLogo, Logo, Content, Monnav, Monimg, Monimg1,
   Monimg2, MonImg, IconWrapper, HamburgerIcon, MenuWrapper, Text, Menu,
  Monnavbar, Texte } from './styles';
import { CiSearch } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import { FaRegBell } from "react-icons/fa";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      
      <SectionLogo>
        <Logo>
          <h1>{title}</h1>
        </Logo>
      </SectionLogo>

      <HamburgerIcon onClick={toggleMenu}>
        &#9776; 
      </HamburgerIcon>

      
      <Content style={{ display: menuOpen ? 'flex' : 'none' }}>
        <Monnavbar>
          <IconWrapper>
            <CiSearch />
          </IconWrapper>
          <input type="text" placeholder="Recherche" />
        </Monnavbar>
       
       <Menu>
        <Monimg>
        <FaRegBell />
        <Texte>
        <span>3</span></Texte>
        </Monimg>

        <Monimg1>
          <img src="/List.png" alt="icon" />
        </Monimg1>

        <Link href="/login" passHref>
          <Monimg2>
            <IoIosLogOut />
          </Monimg2>
        </Link>
        </Menu>
      </Content>

     
      <MenuWrapper>
        <Monnav>
          <IconWrapper>
            <CiSearch />
          </IconWrapper>
          <input type="text" placeholder="Recherche" />
        </Monnav>

        <Monimg>
        <FaRegBell />
        <Text>
         <span>3</span></Text>
        </Monimg>

        <Monimg1>
          <img src="/List.png" alt="icon" />
        </Monimg1>

        <Link href="/login" passHref>
          <Monimg2>
            <IoIosLogOut />
          </Monimg2>
        </Link>
      </MenuWrapper>
    </Nav>
  );
};

export default Navbar;


'use client'; 
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
    color: #0070f3;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
        text-decoration: none;
    }
`;

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <StyledLink>{children}
                
            </StyledLink>
        </Link>
    );
};

export default NavLink;
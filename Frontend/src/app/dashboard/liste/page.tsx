"use client";
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from './formulaire';

const Liste = styled.div`
  background-color: #F0F0F0;
  height: 140vh;
  padding-top: 52px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
  }
`;

const Container = styled.div`
   width: 100%;
   display: inline-block;

   @media (max-width: 768px) {
     width: 100%;
     padding: 0 10px;
   }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0.2px 0.5px rgba(0, 0, 0, 0.2); 
    position: fixed;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      padding: 15px;
    }
`;

const Box = styled.div`
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
`;

const H1 = styled.h2`
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 16px;
    }
`;

const P = styled.p`
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: white;
    color: black;
    height: 30px;
    border: 1px solid #ABB1BB;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
    position: relative;
    left: 700px;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 14px;
      padding: 12px 20px;
      left: 0;
    }

    & > svg {
      margin-right: 5px;
      color: black;
      font-size: 12px;
    }
`;

const ListePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Liste>
      <Container>
        <Row>
          <Box>
            <H1>Hôtels (0)</H1>
          </Box>
          <Box>
            <Button onClick={() => setModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                width="20px"
                height="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Créer un nouveau hôtel
            </Button>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </Box>
        </Row>
      </Container>
    </Liste>
  );
}

export default ListePage;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 240px;
  width: 120px;
  background-color: #fcfcfc;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 8px;
`;

export const ProductImg = styled.img``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ButtonAdd = styled.button`
  width: 40px;
  height: 40px;
  background-color: green;
`;

export const ButtonRmv = styled.button`
  width: 40px;
  height: 40px;
  background-color: red;
`;

export const Contador = styled.p``;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
  background-color: blueviolet;
  padding-left: 16px;
`;

export const HomeText = styled.p`
  color: #fcfcfc;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
`;

export const HomeButton = styled.a`
  border: 0;
  outline: none;
  background: transparent;
  :hover {
    opacity: 0.8;
  }
`;

export const HomeIcon = styled.img`
  width: 40px;
  height: 40px;
`;
import styled from 'styled-components';

export const Container = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
border: 5px solid rgba(0,0,0,0.5);
border-radius: 8px;
`;
export const ProductImag = styled.img`
display : flex;
justify-content: flex-start ;
border: 1px solid rgba(0,0,0,0.5 );
margin: 8px 0 8px 8px;
`;

export const AlinhamentoNome = styled.div`
display:flex;
`;

export const ContainerDesc = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
align-items: center;
`;

export const ProductName = styled.h2` 
display: flex; 
justify-content:flex-start;
margin-left: 50px;
font-size: 25px;
font-weight: 700;
color: blueviolet;
`;

export const ProductDesc = styled.p`
font-size: 18px;

`;

export const ProductValue = styled.p`
margin-right: 16px;
font-weight: 700;
font-size: 16px;
`;


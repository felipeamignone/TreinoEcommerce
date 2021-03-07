import React from "react";

import {
  Container,
  ButtonsContainer,
  ButtonAdd,
  ButtonRmv,
  ProductImg,
  Contador,
} from "./styles";

const ProductDetail = (): JSX.Element => {
  return (
    <Container>
      <ProductImg src="/" alt="Foto do produto" />
      <ButtonsContainer>
        <ButtonAdd>+</ButtonAdd>
        <Contador>0</Contador>
        <ButtonRmv>-</ButtonRmv>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductDetail;

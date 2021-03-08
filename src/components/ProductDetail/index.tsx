import React from "react";
import { IProductDetail } from "../../data/models/typeProductDeatail";

import {
  Container,
  ButtonsContainer,
  ButtonAdd,
  ButtonRmv,
  ProductImg,
  Contador,
  ProductName,
} from "./styles";

const ProductDetail = (props: IProductDetail): JSX.Element => {
const { img, name  } = props;


  return (
    <Container>
      <ProductImg src={img} alt="Foto do produto" />
      <ProductName> {name} </ProductName>
      <ButtonsContainer>
        <ButtonAdd>+</ButtonAdd>
        <Contador>0</Contador>
        <ButtonRmv>-</ButtonRmv>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductDetail;

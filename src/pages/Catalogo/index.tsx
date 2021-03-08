import React from "react";
import ProductDetail from "../../components/ProductDetail";
import { ListaAlfaces } from "../../data/fakedb";
import { IProduct } from "../../data/models/typeProduct";
import { Container } from "./styles";

const Catalogo: React.FC = () => {

  const showProducts = (List: Array<IProduct>): JSX.Element => (
    <>
      {
        List.map((Produto) =>
        (
          <ProductDetail img={Produto.img} name={Produto.name} />
        )
        )
      }
    </>
  );
  return (
    <Container>
      {showProducts(ListaAlfaces)}
    </Container>
  );
};

export default Catalogo;

import React from 'react';

import { Container, ProductImag, ProductName, ProductDesc, ProductValue, AlinhamentoNome, ContainerDesc } from './styles';

const ProductCart: React.FC = () => {
  return (
    <Container>
      <AlinhamentoNome>
        <ProductImag src="" alt="Imagem do Produto" />
        <ProductName>
          Nome Produto
      </ProductName>
      </AlinhamentoNome>
      <ContainerDesc>
        <ProductDesc>
          ifdusgbp
      </ProductDesc>
        <ProductValue>
          515
      </ProductValue>
      </ContainerDesc>
    </Container>
  );
}

export default ProductCart; 
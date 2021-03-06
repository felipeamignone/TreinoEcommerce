import React from "react";

import Home from "../../assets/home.png";

import { Container, HomeButton, HomeIcon, HomeText } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <HomeButton>
        <HomeIcon src={Home} alt="Icone menu" />
      </HomeButton>
      <HomeText>e-commerce de alface</HomeText>
    </Container>
  );
};

export default Header;

import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/logo-fox-entregas.svg";
import LogoWhite from "../../assets/logo-fox-entregas-white.svg";
import { FaBars } from "react-icons/fa";
import { Button } from "../Button/";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getStorageItem } from "../../config/storage";

const Header = ({ startTransparent }) => {
  const [isTransparent] = useState(startTransparent);
  const hasUser = getStorageItem('user')
  return (
    <Nav>
      <NavbarStyled
        bg={isTransparent ? undefined : "white"}
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={isTransparent ? LogoWhite : Logo} alt="Fox Entregas" />
          </Navbar.Brand>

          <ToggleStyled aria-controls="basic-navbar-nav">
            <FaBars />
          </ToggleStyled>

          <CollapseStyled className="justify-content-center text-center justify-content-lg-end">
            <Nav>
              <Navbar>
                <Button
                  $transparent
                  forwardedAs={Link}
                  to="/"
                  className="mt-2 mt-lg-0 ml-lg-4"
                >
                  Inicio
                </Button>
                <Button
                  forwardedAs={Link}
                  to={!!hasUser ? "/novo-pedido" : "/cadastro"}
                  className="mt-2 mt-lg-0 ml-lg-4"
                >
                  {!!hasUser ? "Novo Pedido" : "Criar Conta"}
                </Button>
                <Button
                  forwardedAs={Link}
                  to="/login"
                  className="mt-2 mt-lg-0 ml-lg-4"
                >
                  Fazer Login
                </Button>
              </Navbar>
            </Nav>
          </CollapseStyled>
        </Container>
      </NavbarStyled>
    </Nav>
  );
};

export default Header;

const ToggleStyled = styled(Navbar.Toggle)`
  border: none;
`;

const CollapseStyled = styled(Navbar.Collapse)`
  @media screen and (max-width: 768px) {
  }
`;
const NavbarStyled = styled(Navbar)`
  nav {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

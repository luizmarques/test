import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/logo-fox-entregas.svg";
import LogoWhite from "../../assets/logo-fox-entregas-white.svg";
import { FaBars } from "react-icons/fa";
import { Button } from "../Button/";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ startTransparent }) => {
  const [isTransparent, ] = useState(startTransparent);

  return (
    <Nav>
      <Navbar bg={isTransparent ? undefined : "white"} fixed="top" expand="lg">
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
                  to="/cadastro"
                  className="mt-2 mt-lg-0 ml-lg-4"
                >
                  Criar Conta
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
      </Navbar>
    </Nav>
  );
};

export default Header;

const ToggleStyled = styled(Navbar.Toggle)`
  border: none;
`;

const CollapseStyled = styled(Navbar.Collapse)``;

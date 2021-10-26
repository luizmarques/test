import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../assets/logo-fox-entregas-white.svg";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrap>
      <Container className="d-flex flex-column flex-lg-row align-items-center">
        <Link to="/" className="mr-lg-auto">
          <img src={LogoWhite} alt="Fox Entregas" />
        </Link>
        <Nav className="flex-column flex-lg-row">
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            Termo de uso
          </LinkStyled>
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            <FaInstagram size="40" />
          </LinkStyled>
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            <FaFacebookSquare size="40" />
          </LinkStyled>
        </Nav>
      </Container>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  background-color: var(--layout-footer);
  padding: 30px 0;
`;


const LinkStyled = styled(Link)`
    color: var(--color-light);
    display: flex;
    align-items: center;
`
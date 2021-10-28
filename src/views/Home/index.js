import styled from "styled-components";
import { Layout } from "../../components/Layout";
import bgDesktop from "../../assets/bg-fox-entregas.jpg";
import bgMobile from "../../assets/bg-fox-entregas-mobile.jpg";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Layout startTransparent withoutMargin>
      <Wrap className="vh-100">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <Title className="text-center text-lg-left text-white mt-auto mt-lg-0">
            Fazemos sua entrega de forma rápida e barata
          </Title>
          <div className="mt-auto mt-lg-3 mb-3 d-flex flex-column align-items-center align-items-lg-start">
            <Button
              to="/cadastro"
              forwardedAs={Link}
              variant="success"
              size="lg"
              className="mb-2"
            >
              Criar conta
            </Button>
            <Button to="/login" forwardedAs={Link} variant="success" size="lg">
              Fazer login
            </Button>
          </div>
        </Container>
      </Wrap>
    </Layout>
  );
};

export default Home;

const Wrap = styled.div`
  background: url(${bgMobile}) no-repeat center center;
  background-size: cover;
  @media screen and (min-width: 576px) {
    background-image: url(${bgDesktop});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bgMobile});
  }
  @media screen and (min-width: 992px) {
    background-image: url(${bgDesktop});
  }
`;

const Title = styled.h1`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.25rem;
  @media screen and (min-width: 992px) {
    font-size: 3rem;
    max-width: 500px;
  }
`;

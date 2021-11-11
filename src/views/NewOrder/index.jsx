import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { EstimateForm } from "./EstimateForm";
import { EstimateDetails } from "./EstimateDetails";

const NewOrder = ({ label, ...inputProps }) => {
  return (
    <Layout>
      <Container>
        <PageTitle>Novo Pedido</PageTitle>
        <Row>
          <Col xs={12} md={6} lg={7}>
            <EstimateForm />
          </Col>
          <Col xs={12} md={6} lg={5}>
            <EstimateDetails />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NewOrder;

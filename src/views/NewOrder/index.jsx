import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { EstimateForm } from "./EstimateForm";
import { EstimateDetails } from "./EstimateDetails";
import EstimateFinish from "./EstimateFinish";
import { useSelector } from "react-redux";

const NewOrder = ({ label, ...inputProps }) => {
  const currentEstimate = useSelector((state) => state.order.currentEstimate);

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
        {!!currentEstimate && <EstimateFinish estimative={currentEstimate} />}
      </Container>
    </Layout>
  );
};

export default NewOrder;

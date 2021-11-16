import { Container } from "react-bootstrap";
import styled from "styled-components";

const EstimateFinish = ({ estimative }) => {
  return (
    <Box>
      <Title>Estimativa de Valores para sua Entrega</Title>
      <Container>
        <ReportItem>
          <span>Tempo:</span> {Math.round(estimative.time)} min
        </ReportItem>
        <ReportItem>
          <span>Distância:</span>
          {Math.round(estimative.distance)} km
        </ReportItem>
        <ReportItem>
          <span>Valor:</span>
          {estimative.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </ReportItem>
      </Container>
    </Box>
  );
};

export default EstimateFinish;

const Box = styled.div`
  margin-top: 20px;
  background-color: #eee6;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: thin solid #ddd;
`;

const Title = styled.div`
  border-bottom: 1px dotted #ccc;
  font-size: 16px;
  color: #1117a3;
  padding: 10px;
`;
const ReportItem = styled.div`
  font-size: 14px;
  color: #1117a3;
  }
  padding: 5px 0;
  span {
    font-weight: bold;
    color: #555;  
`;

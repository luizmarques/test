import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export const OrderSuccess = () => {
  return (
    <Layout>
      <Container className='text-center my-5'>
        <Row className='justify-content-center'>
          <Col lg={6} xl={5}>
            <PageTitle>Pedido recebido com sucesso!</PageTitle>
            <p>Entraremos em contato pelo seu telefone e pelo e-mail com os detalhe do motoboy que irá realizar sua entrega.</p>
            <Button variant='success' size='lg' to="/novo-pedido" forwardedAs={Link}>Fazer outro pedido</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
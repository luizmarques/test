import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "../../components/Button";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../../services/authService";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slice/userSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "bruno.peres@prof.infnet.edu.br",
      password: "12345678",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Preencha o e-mail")
        .email("Preencha um e-mail válido."),
      password: yup
        .string()
        .required("Preencha uma senha válida")
        .min(8, "Preencha senha com no mínimo 8 caracteres"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        const { error, response } = await loginUser(values);

        if (!error) {
          dispatch(updateUser(response));
          history.push("/novo-pedido");
          return;
        }
      } catch (error) {
        console.log("error", error);
        setErrors({
          submit: "deu ruim ",
        });
      }
    },
  });

  const getFieldProps = (fieldName) => ({
    ...formik.getFieldProps(fieldName),
    isValid: formik.touched[fieldName] && !formik.errors[fieldName],
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    error: formik.errors[fieldName],
  });

  return (
    <Layout>
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <PageTitle>Login</PageTitle>

            <Form onSubmit={formik.handleSubmit}>
              <FormField
                {...getFieldProps("email")}
                label="E-mail"
                type="email"
                placeholder="Informe seu e-mail de acesso"
              />
              <FormField
                {...getFieldProps("password")}
                label="Senha"
                type="password"
                placeholder="Informe sua senha de acesso"
              />
              <Button
                block
                type="submit"
                className="mb-4"
                loading={formik.isValidating || formik.isSubmitting}
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Login;

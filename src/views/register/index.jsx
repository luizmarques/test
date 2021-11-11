import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "../../components/Button";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from "yup";
import { IMaskInput } from 'react-imask';


const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      agree: false,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Preencha o nome.")
        .min(5, "Informe pelo menos 5 caracteres."),
      email: yup
        .string()
        .required("Preencha o e-mail.")
        .email("Preencha um e-mail válido."),
      phone: yup.string().required("Preencha o telefone."),
      password: yup
        .string()
        .required("Preencha a senha.")
        .min(8, "Informe pelo menos 8 caracteres.")
        .max(50, "Informe no máximo 50 caracteres."),
      agree: yup.boolean().equals([true], "É preciso aceitar os termos."),
    }),
    onSubmit: (values) => undefined,
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
                {...getFieldProps("name")}
                label="Nome"
                placeholder="Nome"
              />
              <FormField
                {...getFieldProps("email")}
                label="E-mail"
                placeholder="Ele será o seu usuário"
              />
              <FormField
                {...getFieldProps("phone")}
                label="Telefone"
                placeholder="(00) 00000-0000"
                as={IMaskInput}
                mask={[
                  {mask: '(00) 0000-0000'},
                  {mask: '(00) 00000-0000'},
                ]}
                onChange={undefined}
                onAccept={value => formik.setFieldValue('phone', value)}
              />
              <FormField
                {...getFieldProps("password")}
                type="password"
                label="Senha"
                placeholder="Informe sua senha de acesso"
                maxLength={50}
              />
              <Form.Group>
                <Form.Check
                  {...formik.getFieldProps("agree")}
                  type="checkbox"
                  label={
                    <span>
                      Li e aceito os{" "}
                      <a href="/termos-de-uso.pdf" target="_blank">
                        Termos de Uso
                      </a>
                      .
                    </span>
                  }
                />
                {formik.touched.agree && formik.errors.agree && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.agree}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

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

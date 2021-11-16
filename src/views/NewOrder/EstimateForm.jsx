import { Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import { FormField } from "../../components/FormField";
import AutocompleteField from "../../components/AutocompleteField";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createEstimative } from "../../services/order";
import {
  setCurrentEstimate,
} from "../../store/slice/orderSlice";

export const EstimateForm = () => {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      pickupAddress: "",
      deliveryAddress: "",
      comments: "",
    },
    validationSchema: yup.object().shape({
      pickupAddress: yup.object().required("Selecione um endereço na lista."),
      deliveryAddress: yup.object().required("Selecione um endereço na lista."),
      comments: yup.string().required("Informe as instuções."),
    }),
    onSubmit: async (values, { setErrors }) => {
      setErrors({});
      try {
        const result = await createEstimative(values);
        dispatch(setCurrentEstimate(result.data));
      } catch (error) {
        //   console.log("error", error);
        //   setErrors({
        //     submit: "deu ruim ",
        // });
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
    <Form onSubmit={formik.handleSubmit}>
      <AutocompleteField
        {...getFieldProps("pickupAddress")}
        label="Endereço de retirada (A)"
        placeholder="Informe o endereço completo"
        onChange={(address) => formik.setFieldValue("pickupAddress", address)}
      />

      <AutocompleteField
        {...getFieldProps("deliveryAddress")}
        label="Endereço de entrega (B)"
        placeholder="Informe o endereço completo"
        onChange={(address) => formik.setFieldValue("deliveryAddress", address)}
      />
      <FormField
        {...getFieldProps("comments")}
        label="Instruções para motoboy"
        as="textarea"
        placeholder="Descreva o que o entregador deve fazer e detalhes importantes."
      />
      <Button
        type="submit"
        className="mb-4"
        loading={formik.isValidating || formik.isSubmitting}
        disabled={!formik.isValid || formik.isSubmitting}
      >
        Calcular preço
      </Button>
    </Form>
  );
};

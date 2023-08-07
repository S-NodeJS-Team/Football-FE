import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { LoadingButton } from "@mui/lab";
import RegisterForm from "./RegisterForm";

interface IRegisterAccountProps {}

const registerFormValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});

const RegisterAccount: React.FunctionComponent<IRegisterAccountProps> = (
  props
) => {
  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerFormValidation,
    onSubmit: async (values, actions) => {
      try {
      } catch (error) {}
    },
  });
  const { isSubmitting, handleSubmit } = registerFormik;

  return (
    <FormikProvider value={registerFormik}>
      <Form onSubmit={handleSubmit}>
        <RegisterForm formik={registerFormik} />

        <LoadingButton
          variant="contained"
          fullWidth
          loading={isSubmitting}
          type="submit"
        >
          Register
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default RegisterAccount;

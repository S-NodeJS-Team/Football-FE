import * as React from "react";
import * as Yup from "yup";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { FormikProvider, Form, useFormik } from "formik";
import RegisterForm from "./RegisterForm";
import { LoadingButton } from "@mui/lab";

interface IRegisterOrganizerAccountProps {}
const registerHostFormValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
  address: Yup.string(),
  acceptTerm: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const RegisterOrganizerAccount: React.FunctionComponent<
  IRegisterOrganizerAccountProps
> = (props) => {
  const registerOrganizerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      acceptTerm: "",
    },
    validationSchema: registerHostFormValidation,
    onSubmit: async (values, actions) => {
      try {
      } catch (error) {}
    },
  });
  const {
    errors,
    setFieldValue,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    values,
  } = registerOrganizerFormik;

  return (
    <FormikProvider value={registerOrganizerFormik}>
      <Form onSubmit={handleSubmit}>
        <RegisterForm formik={registerOrganizerFormik} />

        <FormControlLabel
          control={
            <Checkbox
              {...getFieldProps("acceptTerm")}
              checked={Boolean(values.acceptTerm)}
            />
          }
          onChange={() =>
            setFieldValue("acceptTerm", !Boolean(values.acceptTerm))
          }
          label="Agree to become a home-owner"
        />

        <FormHelperText sx={{ color: "red" }}>
          {touched.acceptTerm && errors.acceptTerm
            ? touched.acceptTerm && errors.acceptTerm
            : ""}
        </FormHelperText>

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

export default RegisterOrganizerAccount;

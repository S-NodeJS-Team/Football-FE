import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface IUpdatePasswordProps {}

const updatePasswordFormValidation = Yup.object({
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

const UpdatePassword: React.FunctionComponent<IUpdatePasswordProps> = (
  props
) => {
  const updatePasswordFormik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: updatePasswordFormValidation,
    onSubmit: async (values, actions) => {
      try {
      } catch (error) {}
    },
  });

  const { isSubmitting, dirty, handleSubmit, getFieldProps, touched, errors } =
    updatePasswordFormik;

  return (
    <FormikProvider value={updatePasswordFormik}>
      <Form onSubmit={handleSubmit}>
        <Stack spacing={2} sx={{ my: 2 }}>
          <TextField
            label="New Password"
            type="Password"
            {...getFieldProps("newPassword")}
            error={Boolean(touched.newPassword && errors.newPassword)}
            helperText={touched.newPassword && errors.newPassword}
          />

          <TextField
            label="Confirm Password"
            type="Password"
            {...getFieldProps("confirmPassword")}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
        </Stack>

        <LoadingButton variant="contained" loading={isSubmitting} type="submit">
          Update
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default UpdatePassword;

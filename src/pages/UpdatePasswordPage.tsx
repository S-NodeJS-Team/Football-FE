import * as React from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Loading from "../components/common/Loading";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

interface IUpdatePasswordPageProps {}

const updatePasswordValidation = Yup.object({
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string().required("New password is required"),
});

const UpdatePasswordPage: React.FunctionComponent<IUpdatePasswordPageProps> = (
  props
) => {
  const forgotPasswordFormik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: updatePasswordValidation,
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);

        setIsLoading(false);
      } catch (error: any) {
        const { message } = error.response.data;

        if (Array.isArray(message)) {
          message.forEach((element: String) => {
            toast.error(element);
          });
        }

        toast.error(message);

        setIsLoading(false);
      }
    },
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { isSubmitting, handleSubmit, errors, touched, getFieldProps } =
    forgotPasswordFormik;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          my: {
            xs: 0,
            md: 10,
          },
        }}
      >
        <Helmet>
          <title>Update Password</title>
        </Helmet>
        <Stack alignItems="center" justifyItems="center" spacing={5}>
          <Typography variant="h3">Input your new password</Typography>

          <FormikProvider value={forgotPasswordFormik}>
            <Form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="New Password"
                  type="password"
                  {...getFieldProps("newPassword")}
                  error={Boolean(touched.newPassword && errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                  fullWidth
                />

                <TextField
                  label="Confirm Password"
                  type="password"
                  {...getFieldProps("confirmPassword")}
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  fullWidth
                />

                <LoadingButton variant="contained" fullWidth>
                  Update
                </LoadingButton>
              </Stack>
            </Form>
          </FormikProvider>
        </Stack>
      </Box>
      <Loading loading={isLoading} />
    </>
  );
};

export default UpdatePasswordPage;

import * as React from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Loading from "../components/common/Loading";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { forgotPasswordService } from "../apis/auth.api";
import { IResponse } from "../interfaces/api/api.interface";

interface IForgotPasswordPageProps {}

const forgotPasswordFormValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
});
const ForgotPasswordPage: React.FunctionComponent<IForgotPasswordPageProps> = (
  props
) => {
  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordFormValidation,
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);

        const res: IResponse = await forgotPasswordService(values.email);
        if (res.code !== 200) {
          toast.error(res.message);

          return;
        }

        toast.success(res.message);

        actions.resetForm();
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
          <title>Forgot Password</title>
        </Helmet>
        <Stack alignItems="center" justifyItems="center" spacing={5}>
          <Typography variant="h3">Input your email</Typography>

          <FormikProvider value={forgotPasswordFormik}>
            <Form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Email"
                  type="email"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                />

                <LoadingButton
                  loading={isSubmitting}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Send
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

export default ForgotPasswordPage;

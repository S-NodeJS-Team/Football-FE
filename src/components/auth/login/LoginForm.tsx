import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { DialogContent, IconButton, Stack, TextField } from "@mui/material";

interface ILoginFormProps {}

const loginFormValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleShowPassword = () => setShowPassword(!showPassword)

  const loginFormik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit: async (values, actions) => {
        try {
            
        } catch (error) {
            
        }
    }
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps} = loginFormik;

  return (
    <FormikProvider value={loginFormik}>
      <Form onSubmit={handleSubmit}>
        <DialogContent>
          Please fill your information in the fields below:
        </DialogContent>
        <DialogContent dividers>
          <Stack spacing={3} mb={3}>
            <TextField
              label="Email"
              type="Email"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                ),
              }}
            />
          </Stack>

          <LoadingButton
            fullWidth
            variant="contained"
            loading={isSubmitting}
            type="submit"
          >
            Login
          </LoadingButton>
        </DialogContent>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;

import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Link,
} from "@mui/material";
import { signInService } from "../../../apis/auth.api";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { openLoginForm } from "../../../stores/commonSlice";
import { login } from "../../../stores/userSlice";
import { ISignInResponse } from "../../../interfaces/auth";
import { Link as ReactLink } from "react-router-dom";

interface ILoginFormProps {}

const loginFormValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleShowPassword = () => setShowPassword(!showPassword);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit: async (values, actions) => {
      try {
        const res: ISignInResponse = await signInService(values);

        if (res.code !== 200) {
          toast.error(res.message);

          return;
        }
        dispatch(openLoginForm(false));
        dispatch(login(res.data.user));

        localStorage.setItem(
          "access_token",
          JSON.stringify(res.data.access_token)
        );

        toast.success(res.message);

        actions.resetForm();
      } catch (error: any) {
        const { message } = error.response.data;

        if (Array.isArray(message)) {
          message.forEach((element) => {
            toast.error(element);
          });
        }

        toast.error(message);
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } =
    loginFormik;

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

          <Link component={ReactLink} to="/forgot-password">
            Forgot password
          </Link>

          <LoadingButton
            fullWidth
            variant="contained"
            loading={isSubmitting}
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </LoadingButton>
        </DialogContent>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;

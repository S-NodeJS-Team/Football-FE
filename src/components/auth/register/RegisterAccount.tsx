import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { LoadingButton } from "@mui/lab";
import RegisterForm from "./RegisterForm";
import { toast } from "react-toastify";
import { signUpService } from "../../../apis/auth.api";
import { IResponse } from "../../../interfaces/api/api.interface";

interface IRegisterAccountProps {}

const registerFormValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
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
      phoneNumber: ""
    },
    validationSchema: registerFormValidation,
    onSubmit: async (values, actions) => {
      try {
        if (values.password !== values.confirmPassword) {
          toast.error("Password not match");

          return;
        }
        

        const { confirmPassword, ...signUpPayload } = values;

        const res: IResponse = await signUpService(signUpPayload);

        if (res.code !== 200) {
          toast.error(res.message);

          return;
        }

        toast.success(res.message);

        actions.resetForm();
      } catch (error: any) {
        const { message } = error.response.data;

        if (Array.isArray(message)) {
          message.forEach((element: String) => {
            toast.error(element);
          });
        }

        toast.error(message);
      }
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

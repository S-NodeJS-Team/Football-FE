import * as React from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MuiPhoneNumber from "material-ui-phone-number";

interface IRegisterFormProps {
  formik: any;
}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = ({
  formik,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const { errors, touched, getFieldProps } = formik;

  return (
    <>
      <Typography sx={{ my: 3 }}>
        Please fill your information in the fields below:
      </Typography>

      <Stack spacing={3} mb={3} mx={1}>
        <Stack
          direction={{
            md: "row",
            xs: "column",
          }}
          spacing={2}
        >
          <TextField
            fullWidth
            label="Name"
            type="text"
            {...getFieldProps("name")}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />

          <TextField
            fullWidth
            label="Email"
            type="Email"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
        </Stack>

        <Stack>
          <MuiPhoneNumber
            fullWidth
            defaultCountry={"de"}
            value={formik.values.phoneNumber}
            onChange={(value) => formik.setFieldValue("phoneNumber", value)}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Stack>

        <Stack
          direction={{
            md: "row",
            xs: "column",
          }}
          spacing={2}
        >
          <TextField
            fullWidth
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

          <TextField
            fullWidth
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            {...getFieldProps("confirmPassword")}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default RegisterForm;

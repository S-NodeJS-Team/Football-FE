import { Avatar, Box, Grid, Stack, TextField } from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { useDropzone } from "react-dropzone";
import { LoadingButton } from "@mui/lab";

interface IGeneralInfosProps {}

const generalInfosFormValidation = Yup.object({
  name: Yup.string(),
  email: Yup.string().email(),
  phoneNumber: Yup.string(),
  avatar: Yup.string(),
});

const GeneralInfos: React.FunctionComponent<IGeneralInfosProps> = (props) => {
  const onDrop = React.useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const generalInfoFormik = useFormik({
    validationSchema: generalInfosFormValidation,
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      avatar: "",
    },
    onSubmit: async (values, actions) => {
      try {
      } catch (error) {}
    },
  });

  const { handleSubmit, getFieldProps } = generalInfoFormik;

  return (
    <FormikProvider value={generalInfoFormik}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Stack spacing={1}>
              <TextField
                fullWidth
                label="Name"
                type="text"
                {...getFieldProps("name")}
              />
              <TextField
                label="Email"
                type="text"
                {...getFieldProps("email")}
              />
              <TextField
                label="Phome Number"
                type="text"
                {...getFieldProps("phoneNumber")}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                }}
              />

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
            </Box>
          </Grid>
        </Grid>

        <LoadingButton variant="contained">Update</LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default GeneralInfos;

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
  const [file, setFile] = React.useState<File | null>(null);
  const [image, setImage] = React.useState<null | string>(null);
  const accept: any = "image/*";

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
        if (!file) {
          return;
        }

        
      } catch (error) {}
    },
  });

  const { handleSubmit, getFieldProps, setFieldValue } = generalInfoFormik;

  const onDrop = React.useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];

    if (!file) {
      return;
    }
    setFile(file);
    setImage(URL.createObjectURL(file));
    setFieldValue("avatar", URL.createObjectURL(file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

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
                src={image ? image : ""}
              />

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p style={{ color: "green" }}>Drop the files here ...</p>
                ) : (
                  <p>
                    Drag 'n' drop your new avatar here, or click to select file
                  </p>
                )}
                <em>
                  Images with *.jpeg, *.png, *.jpg extensions will be accepted
                </em>
              </div>
            </Box>
          </Grid>
        </Grid>

        <LoadingButton variant="contained" type="submit">
          Update
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default GeneralInfos;

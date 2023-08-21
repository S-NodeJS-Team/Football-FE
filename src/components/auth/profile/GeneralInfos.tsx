import { Avatar, Box, Grid, Stack, TextField } from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { useDropzone } from "react-dropzone";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { v4 as uuidv4 } from "uuid";
import uploadFile from "../../../firebase/uploadFile";
import { updateUserService } from "../../../apis/user.api";
import { IUpdateUserResponse } from "../../../interfaces/user";
import { toast } from "react-toastify";
import { updateUser } from "../../../stores/userSlice";
import MuiPhoneNumber from "material-ui-phone-number";
import deleteFile from "../../../firebase/deleteFile";
import {
  handleErrorMessage,
  handleSuccessMessage,
} from "../../../utils/message-handle.util";

interface IGeneralInfosProps {}

const generalInfosFormValidation = Yup.object({
  name: Yup.string(),
  email: Yup.string().email(),
  phoneNumber: Yup.string(),
  avatar: Yup.string(),
});

const GeneralInfos: React.FunctionComponent<IGeneralInfosProps> = (props) => {
  const [file, setFile] = React.useState<File | null>(null);
  const currUser = useAppSelector((state) => state.user.currUser);
  const dispatch = useAppDispatch();

  const onDrop = React.useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];

    if (!file) {
      return;
    }

    setFile(file);
    setFieldValue("avatar", URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: false,
  });

  const generalInfoFormik = useFormik({
    validationSchema: generalInfosFormValidation,
    initialValues: {
      name: currUser ? currUser.name : "",
      email: currUser ? currUser.email : "",
      phoneNumber: currUser?.phoneNumber ? currUser.phoneNumber : "",
      avatar: currUser ? currUser.avatar : "",
    },
    onSubmit: async (values, actions) => {
      try {
        if (!file) {
          const res: IUpdateUserResponse = await updateUserService(values);

          handleSuccessMessage(res, toast);

          dispatch(updateUser(res.data.user));

          return;
        }

        const imageName = uuidv4() + "." + file.name.split(".").pop();

        if (currUser?.avatar) {
          await deleteFile(currUser.avatar);
        }

        const avatarURL = await uploadFile(
          file,
          `${currUser?.name}/profile/${imageName}`
        );

        const res: IUpdateUserResponse = await updateUserService({
          ...values,
          avatar: avatarURL as string,
        });

        handleSuccessMessage(res, toast);

        dispatch(updateUser(res.data.user));
      } catch (error: any) {
        handleErrorMessage(error, toast);
      }
    },
  });

  const {
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isSubmitting,
    dirty,
    values,
  } = generalInfoFormik;

  return (
    <FormikProvider value={generalInfoFormik}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
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
              <Stack>
                <MuiPhoneNumber
                  fullWidth
                  label="Phone Number"
                  defaultCountry={"de"}
                  value={generalInfoFormik.values.phoneNumber}
                  onChange={(value) =>
                    generalInfoFormik.setFieldValue("phoneNumber", value)
                  }
                />
              </Stack>
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
                src={values.avatar || ""}
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

        <LoadingButton
          disabled={!dirty}
          loading={isSubmitting}
          variant="contained"
          type="submit"
        >
          Update
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default GeneralInfos;

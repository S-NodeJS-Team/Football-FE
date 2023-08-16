import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { openLoginForm } from "../../../stores/commonSlice";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

interface ILoginFormDialogProps {}

const LoginFormDialog: React.FunctionComponent<ILoginFormDialogProps> = (
  props
) => {
  const dispatch = useAppDispatch();
  const { openLogin } = useAppSelector((state) => state.common);
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(openLoginForm(false));
  };
  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>
        {"Login"}
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <LoginForm />

      <DialogActions
        sx={{ justifyContent: "left", p: "5px 24px", alignItems: "center" }}
      >
        Don't you have an account ? Create one now
        <Button
          variant="contained"
          color="warning"
          sx={{ ml: 2 }}
          onClick={() => {
            dispatch(openLoginForm(false));
            navigate("/register");
          }}
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginFormDialog;

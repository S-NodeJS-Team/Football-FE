import * as React from 'react';
import { Box, Card, Typography, Button } from "@mui/material";
import { useAppDispatch } from '../hooks/redux-hooks';
import { openLoginForm } from '../stores/commonSlice';
import LoginFormDialog from '../components/auth/login/LoginFormDialog';
import RegisterAccount from '../components/auth/register/RegisterAccount';

interface IRegisterPageProps {
}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
    const dispatch = useAppDispatch();
  return (
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
    <Card
      sx={{
        width: {
          md: 500,
          lg: "100%",
        },
        height: 400,
        maxWidth: {
          lg: 600,
          sm: 400,
        },
        display: {
          sm: "flex",
          xs: "none",
        },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">
        Register account to participate football tournament
      </Typography>
      <img
        style={{
          width: 400,
          height: 300,
        }}
        alt="register-account"
        src="https://img.freepik.com/premium-vector/football-tournament-concept-with-3d-soccer-ball-participating-team-vs-b-blue-green-stadium-background_1302-35561.jpg"
      />
    </Card>

    <Box
      sx={{
        display: "flex",
        maxWidth: 480,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <RegisterAccount />

      <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
        Already have an account? &nbsp;
        <Button
          onClick={() => dispatch(openLoginForm(true))}
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </Typography>
    </Box>
    <LoginFormDialog />
  </Box>
  );
};

export default RegisterPage;

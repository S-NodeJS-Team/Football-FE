import * as React from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import { useAppDispatch } from "../hooks/redux-hooks";
import { openLoginForm } from "../stores/commonSlice";
import RegisterOrganizerAccount from "../components/auth/register/RegisterOrganizeAccount";

interface IBecomeOrganizerPageProps {}

const BecomeOrganizerPage: React.FunctionComponent<
  IBecomeOrganizerPageProps
> = (props) => {
  const dispatch = useAppDispatch();

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
          <img
            style={{
              width: 400,
              height: 300,
            }}
            alt="become-host"
            src="https://c8.alamy.com/comp/MW3KAH/football-tournament-banner-MW3KAH.jpg"
          />
          <Typography textAlign="center" variant="h4">
            Register account to organizer football tournament
          </Typography>
        </Card>

        <Box
          sx={{
            display: "flex",
            maxWidth: 480,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <RegisterOrganizerAccount />

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
      </Box>
    </>
  );
};

export default BecomeOrganizerPage;

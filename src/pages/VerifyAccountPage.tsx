import * as React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyAccountService } from "../apis/auth.api";
import Loading from "../components/common/Loading";
import { IVerifyAccountResponse } from "../interfaces/auth";

interface IVerifyAccountPageProps {}

const VerifyAccountPage: React.FunctionComponent<IVerifyAccountPageProps> = (
  props
) => {
  const [queryParameters] = useSearchParams();
  const verifyToken = queryParameters.get("token");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const verifyAccount = async () => {
      try {
        setIsLoading(true);
        if (!verifyToken) {
          return;
        }

        const res: IVerifyAccountResponse = await verifyAccountService(verifyToken);

        if (res.code !== 200) {
          toast.error(res.message);

          return;
        }

        toast.success(res.message);
        setIsLoading(false);
        navigate("/");
      } catch (error: any) {
        const { message } = error.response.data;

        if (Array.isArray(message)) {
          message.forEach((element) => {
            toast.error(element);
          });
        }

        toast.error(message);
        setIsLoading(false);
      }
    };

    verifyAccount();
  }, []);

  return (
    <>
      <Container
        sx={{
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 600,
        }}
      >
        <Helmet>
          <title>Verify Account</title>
        </Helmet>
        <Stack alignItems="center" justifyItems="center" spacing={5}>
          <Typography variant="h3">Verify your account</Typography>
        </Stack>
      </Container>
      <Loading loading={isLoading} />
    </>
  );
};

export default VerifyAccountPage;

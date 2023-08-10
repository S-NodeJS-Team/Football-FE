import * as React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface ILoadingProps {
  loading: boolean;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ loading }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;

import * as React from "react";
import { Space, Layout, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import LoginDialog from "../components/auth/LoginDialog";

interface IHeaderContentProps {}

const HeaderContent: React.FunctionComponent<IHeaderContentProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(true)} icon={<LoginOutlined />}>
        Login
      </Button>
      <LoginDialog open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

export default HeaderContent;

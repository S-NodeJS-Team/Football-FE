import * as React from "react";
import { Button, Modal, Form, Input } from "antd";
import { Link } from "react-router-dom";

export interface ILoginDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type FieldType = {
  email?: string;
  password?: string;
};

export default function LoginDialog({ open, setOpen }: ILoginDialogProps) {
  const handleLogin = async () => {
    try {
    } catch (error) {}
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Login to system"
      centered
      open={open}
      footer={[
        <>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </>,
      ]}
    >
      <Form name="basic" autoComplete="off" onFinish={handleLogin}>
        <Form.Item<FieldType>
          label="Your email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Link to='/forgot-password'>Forgot password</Link>
      </Form>
    </Modal>
  );
}

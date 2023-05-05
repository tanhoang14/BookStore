import { Form, Input, Button } from "antd";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/securityActions";

const Login = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const security = useSelector((state) => state.security);
  const error = useSelector((state) => state.error);
    
  useEffect(() => {
    if (security.validToken) {
      props.history.push("/");
    }
    
  }, [security.validToken]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      dispatch(login(values));
    });
  };
  return (
    <Form
      className="custom-form"
      form={form}
      onFinish={handleSubmit}
      wrapperCol={{ span: 8 }}
      labelCol={{ span: 8 }}
    >
    <div className="form">{(error.errors.username && error.errors.password) && <p>Invalid username or password</p>} </div>
      <Form.Item
        name="username"
        label="username"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        name="password"
        label="password"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
        ]}
      >
        <Input.Password></Input.Password>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;

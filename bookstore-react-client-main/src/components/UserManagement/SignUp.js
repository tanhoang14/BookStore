import { Form, Input, Button } from "antd";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createNewUser } from "../../actions/securityActions";

const SignUp = (props) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const security = useSelector((state) => state.security);

  useEffect(() => {
    if (security.validToken) {
      history.push("/");
    }
  }, []);
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      dispatch(createNewUser(values, history));
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
        name="email"
        label="email"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        name="firstname"
        label="firstname"
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
        name="lastname"
        label="lastname"
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
        name="phone"
        label="phone"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || phoneRegex.test(value)) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("This is not a valid phone number !")
              );
            },
          }),
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
          {
            min: 5,
            message: "5 characters at least",
          },
          {
            max: 10,
            message: "10 characters at most",
          },
        ]}
      >
        <Input.Password></Input.Password>
      </Form.Item>
      <Form.Item
        name="confirm"
        label="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password></Input.Password>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;

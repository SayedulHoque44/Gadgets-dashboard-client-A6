import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { setUser } from "../redux/features/Auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/dashboard`);
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="shadow-lg p-20">
        <h1 className="text-center text-xl font-semibold">Login Please!</h1>
        <Form onSubmit={onSubmit}>
          <FormInput type="text" name="email" label="email" />
          <FormInput type="text" name="password" label="Password" />
          <Button
            disabled={isLoading}
            className="text-white disabled:text-white"
            htmlType="submit">
            Login
          </Button>
        </Form>
        <p className="mt-2">
          Dont't have account?{" "}
          <Link className="text-blue-400" to={"/register"}>
            Register Now!
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Login;

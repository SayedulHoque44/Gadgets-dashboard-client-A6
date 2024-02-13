import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";
import { useRegisterMutation } from "../redux/features/Auth/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  //
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registraing");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await register(userInfo).unwrap();
      console.log(res);
      toast.success("Registration successfull!", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`);
    } catch (err: any) {
      // console.log(err);
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="shadow-lg p-20">
        <h1 className="text-center text-xl font-semibold">
          Register first Please!
        </h1>
        <Form onSubmit={onSubmit}>
          <FormInput type="text" name="name" label="name" />
          <FormInput type="text" name="email" label="email" />
          <FormInput type="text" name="password" label="Password" />
          <Button
            disabled={isLoading}
            className="text-white disabled:text-white"
            htmlType="submit">
            Register
          </Button>
        </Form>
        <p className="mt-2">
          Already have account?{" "}
          <Link className="text-blue-400" to={"/login"}>
            Login Now!
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Register;

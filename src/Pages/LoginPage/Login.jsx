import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className=" text-center pt-5 bg-secondary">
      <h3>Login Here or Register Here</h3>
      <Container className="mt-5  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            className="w-50 py-2"
            placeholder="Input Your Email"
          />{" "}
          <br /> <br />
          <input
            {...register("password", { required: true })}
            placeholder="Input Password Here"
            className="w-50 py-2"
          />{" "}
          <br /> <br />
          {errors.email && <span>This field is required</span>}
          {errors.password && <span>This field is required</span>}
          <input type="submit" className="btn btn-success w-50" />
          <br />
          <small> -Or- </small> <br />
          <Button text={"Login With Google"}></Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;

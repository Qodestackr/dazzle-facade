import { useForm } from "react-hook-form";
import { useNavigate } from "@core/hooks";

import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpMutation = useSignUpMutation();
  const navigate = useNavigate(); //

  const loginSubmitHandler = async (data: any) => {
    try {
      console.log(data);
      // await signUpMutation.mutateAsync(data);

      console.log("User registered successfully");
      /*** */
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      /**** */
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form
      className="w-[40vw] mx-auto"
      onSubmit={handleSubmit(loginSubmitHandler)}
    >
      <h1 className="text-3xl">Register into Dazzle</h1>
      <div className="mb-4">
        <Input
          label="Phone/Email"
          type="text"
          placeholder="Enter your username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message as ReactNode}</p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message as ReactNode}</p>
        )}
      </div>

      <div className="my-6">
        <Link to="/forgot-password">Forgot Your Password?</Link>
      </div>

      <Button type="submit">
        {signUpMutation.isLoading ? "..." : "Login"}
      </Button>

      <div className="my-3">
        Or <Link to="/register">Register instead</Link>
      </div>
    </form>
  );
}

export default Login;

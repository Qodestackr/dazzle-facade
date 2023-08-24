import { useForm } from "react-hook-form";
import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpMutation = useSignUpMutation();

  const registerSubmitHandler = async (data: any) => {
    try {
      console.log(data);
      await signUpMutation.mutateAsync(data);

      console.log("User registered successfully");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form
      className="w-[60vw] mx-auto"
      onSubmit={handleSubmit(registerSubmitHandler)}
    >
      <h1 className="text-3xl">Register into Dazzle</h1>
      <div className="mb-4">
        <Input
          label="Username"
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
      <div className="mb-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email address"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message as ReactNode}</p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Company Name"
          type="text"
          placeholder="Enter your company name"
          {...register("company_name", {
            required: "Company name is required",
          })}
        />
        {errors.company_name && (
          <p className="text-red-500">
            {errors.company_name.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Company Address"
          type="text"
          placeholder="Enter your company address"
          {...register("company_address", {
            required: "Company address is required",
          })}
        />
        {errors.company_address && (
          <p className="text-red-500">
            {errors.company_address.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Industry"
          type="text"
          placeholder="Enter your industry"
          {...register("industry", { required: "Industry is required" })}
        />
        {errors.industry && (
          <p className="text-red-500">{errors.industry.message as ReactNode}</p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Employee Count"
          type="number"
          placeholder="Enter employee count"
          {...register("employee_count", {
            required: "Employee count is required",
          })}
        />
        {errors.employee_count && (
          <p className="text-red-500">
            {errors.employee_count.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Contact Person Name"
          type="text"
          placeholder="Enter contact person name"
          {...register("contact_person_name", {
            required: "Contact person name is required",
          })}
        />
        {errors.contact_person_name && (
          <p className="text-red-500">
            {errors.contact_person_name.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Contact Email"
          type="email"
          placeholder="Enter contact email"
          {...register("contact_email", {
            required: "Contact email is required",
          })}
        />
        {errors.contact_email && (
          <p className="text-red-500">
            {errors.contact_email.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter phone number"
          {...register("phone_number", {
            required: "Phone number is required",
          })}
        />
        {errors.phone_number && (
          <p className="text-red-500">
            {errors.phone_number.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Subdomain"
          type="text"
          placeholder="Enter subdomain"
          {...register("subdomain", { required: "Subdomain is required" })}
        />
        {errors.subdomain && (
          <p className="text-red-500">
            {errors.subdomain.message as ReactNode}
          </p>
        )}
      </div>
      <Button type="submit">
        {signUpMutation.isLoading ? "Registering..." : "Register"}
      </Button>

      <div className="my-3">
        Or <Link to="/login">Login instead</Link>
      </div>
    </form>
  );
}

export default Register;
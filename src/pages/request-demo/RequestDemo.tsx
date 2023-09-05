import { useForm } from "react-hook-form";
import { useNavigate } from "@core/hooks";

import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@core/components"

import { businessTypeOptions } from "../../types/interfaces/businessType"

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function RequestDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpMutation = useSignUpMutation();
  const navigate = useNavigate(); //

  const requestDemoHandler = async (data: any) => {
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
    <section id="request-demo">
      <div className="w-10/12 md:w-8/12 mx-auto">
        <h2 className="font-medium text-3xl">Request a Demo Today!</h2>
        <p>
          The modern solution for HR, Payroll, Compliance, and Benefits built{" "}
          <br /> for local and remote teams.
        </p>
        <form className="" onSubmit={handleSubmit(requestDemoHandler)}>
          <div className="mb-2">
            <Input
              label="FullName"
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "This field is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500 mt-[-10px]">
                {errors.fullName.message as ReactNode}
              </p>
            )}
          </div>
          <div className="mb-2">
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              {...register("password", { required: "Email is required" })}
            />
            {errors.password && (
              <p className="text-red-500 mt-[-10px]">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div className="mb-2">
            <Input
              label="Company Name"
              type="text"
              placeholder="Company Name"
              {...register("password", {
                required: "Company Name is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 mt-[-10px]">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div className="mb-2">
            <Input
              label="Number of Employees"
              type="number"
              placeholder="Number of Employees"
              {...register("password", { required: "Email is required" })}
            />
            {errors.password && (
              <p className="text-red-500 mt-[-10px]">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div className="mb4">
            <label htmlFor="SelectIndustry">Select Industry</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="E.g Insurance" />
              </SelectTrigger>
              <SelectContent>
                {businessTypeOptions.map((option) => (
                  <SelectItem key={option.optionId} value={option.name}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>



          <div className="mb-2">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="254700652437"
              {...register("password", { required: "Phone is required" })}
            />
            {errors.password && (
              <p className="text-red-500 mt-[-10px]">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div className="mb-2">
            <Input
              label="How did You Hear about Us?"
              type="text"
              placeholder="Type Here..."
              {...register("password", { required: "This field is required" })}
            />
            {errors.password && (
              <p className="text-red-500 mt-[-10px]">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div>
            <input type="checkbox" name="" id="" className="my-4" />
            <label className="mx-2"> Accept terms and privacy policy</label>
          </div>

          <Button type="submit" className="w-full md:w-4/12">
            {signUpMutation.isLoading ? "..." : "Book Demo"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default RequestDemo;

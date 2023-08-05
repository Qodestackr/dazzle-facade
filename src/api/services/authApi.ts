import { axiosDefaultInstance } from "../axios";
import { useMutation, UseMutationOptions } from "react-query";

export interface AuthCredentials {
  email: string;
  password: string;
}

export const signUp = async (data: AuthCredentials): Promise<void> => {
  await axiosDefaultInstance.post("/auth/sign-up", data);
};

export const useSignUpMutation = (
  options?: UseMutationOptions<void, any, AuthCredentials>
) => {
  return useMutation<void, any, AuthCredentials>(signUp, options);
};

export const login = async (data: AuthCredentials): Promise<void> => {
  await axiosDefaultInstance.post("/auth/login", data);
};

export const useLoginMutation = (
  options?: UseMutationOptions<void, any, AuthCredentials>
) => {
  return useMutation<void, any, AuthCredentials>(login, options);
};

import { z } from "zod";

 export const signUpSchema = z.object({
    userName: z.string().min(3, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email Address is required" })
      .email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(11, { message: "Phone Number is required" })
      .max(11, { message: "phone number must be 11 digits" })
      .regex(/^(02)?01[0125][0-9]{8}$/, {
        message: "Invalid Phone Number Format",
      }),
  });
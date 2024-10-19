import * as yup from "yup";

export type ServiceType = "consulting" | "development" | "design" | "other";

export interface FormInputs {
  email: string;
  name: string;
  company: string;
  service: ServiceType;
}

export const schema = yup
  .object({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters")
      .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    company: yup
      .string()
      .min(2, "Company must be at least 2 characters")
      .max(50, "Company must not exceed 50 characters")
      .required("Company is required"),
    service: yup
      .string()
      .oneOf(["consulting", "development", "design", "other"] as const)
      .required("Service selection is required"),
  })
  .required();

// Infer the type from the schema
export type FormInputSchema = yup.InferType<typeof schema>;

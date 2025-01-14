import * as yup from "yup";

export type ServiceType =
  | "Web Design"
  | "Motion"
  | "Engineering"
  | "UI+UX Design"
  | "Merch"
  | "Illustration"
  | "Social Media Assets"
  | "Branding";

export interface SelectOption {
  value: ServiceType;
  label: string;
}

export const serviceOptions: SelectOption[] = [
  { value: "Web Design", label: "Web Design" },
  { value: "Motion", label: "Motion" },
  { value: "Engineering", label: "Engineering" },
  { value: "UI+UX Design", label: "UI+UX Design" },
  { value: "Merch", label: "Merch" },
  { value: "Illustration", label: "Illustration" },
  { value: "Social Media Assets", label: "Social Media Assets" },
  { value: "Branding", label: "Branding" },
];

export interface FormInputs {
  name: string;
  email: string;
  company: string;
  service: ServiceType[];
}

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string().required("Company name is required"),
  service: yup
    .array()
    .of(
      yup
        .string()
        .oneOf([
          "Web Design",
          "Motion",
          "Engineering",
          "UI+UX Design",
          "Merch",
          "Illustration",
          "Social Media Assets",
          "Branding",
        ] as const)
        .required()
    )
    .min(1, "Please select at least one service")
    .required("Please select at least one service"),
});

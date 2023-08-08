import { Control, UseFormSetValue } from "react-hook-form";

export interface FormInputProps {
  name: "status" | "name" | "familyName" | "nationalId" | "education";
  control: Control<IFormInput>;
  label: string;
  setValue?: UseFormSetValue<IFormInput>;
  required?: boolean;
}
export interface IFormInput {
  nationalId: string;
  name: string | Omit<string, "">;
  familyName?: string;
  education:
    | "no_diploma"
    | "diploma"
    | "bachelors_degree"
    | "masters_degree"
    | "doctrate_degree";
  status: "active" | "deactive";
}

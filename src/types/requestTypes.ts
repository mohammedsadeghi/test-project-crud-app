export interface ResponseDataType {
  data: {
    nationalId: number;
    name: string | Omit<string, "">;
    familyName?: string;
    education:
      | "no_diploma"
      | "diploma"
      | "bachelors_degree"
      | "masters_degree"
      | "doctrate_degree";
    status: "active" | "deactive";
  }[];
}

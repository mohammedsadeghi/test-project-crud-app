import { ResponseDataType } from "@/types/requestTypes";
import axios from "axios";
export const handleSubmitForm = (data: ResponseDataType["data"][0]) => {
  return axios.post("http://localhost:3000/api/persons?tag=people", {
    data,
  });
};

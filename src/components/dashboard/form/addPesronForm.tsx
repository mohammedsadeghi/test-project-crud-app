"use client";

import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../input/textInput";
import { FormInputDropdown } from "../input/dropdownInput";
import { FormInputMultiCheckbox } from "../input/checkboxInput";
import { IFormInput } from "@/types/formTypes";
import { SubmitFormButton } from "../button/submitFormButton";
import { handleSubmitForm } from "@/utils/handleSubmitForm";
import { useModalContext } from "../modal/addPersonModal";

const defaultValues: IFormInput = {
  name: "",
  familyName: "",
  nationalId: "",
  status: "active",
  education: "no_diploma",
};
export const Form = () => {
  const { handleSubmit, control, setValue } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });
  const { handleCloseModal } = useModalContext();

  const onSubmit = (data: IFormInput) =>
    handleSubmitForm({ ...data, nationalId: JSON.parse(data.nationalId) })
      .then((res) => {
         
        if (res.status === 200) handleCloseModal(false);
      })
      .catch((e: unknown) => console.log(e));
  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4" textAlign={"center"}>
        ثبت اطلاعات
      </Typography>
      <FormInputText
        name="name"
        control={control}
        label="نام"
        required={true}
      />
      <FormInputText name="familyName" control={control} label="نام خانوادگی" />
      <FormInputText
        name="nationalId"
        control={control}
        label="کد ملی"
        required={true}
      />

      <FormInputDropdown name="education" control={control} label="تحصیلات" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"status"}
        label={"وضعیت"}
      />
      <SubmitFormButton submit={handleSubmit(onSubmit)} />
    </Paper>
  );
};

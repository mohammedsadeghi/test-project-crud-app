import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "@/types/formTypes";
import { checkNationalId } from "@/utils/checkNationalId";

export const FormInputText = ({
  name,
  control,
  label,
  required,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
        pattern: name === "nationalId" ? /^[0-9]*$/g : /^[a-zA-Z]*$/g,
        validate: (value) => {
          if (name === "nationalId") {
            // if (typeof value === "string" && value.length > 0) {
            //   return checkNationalId(value);
            // } else {
            //   return false;
            // }
            return true;
          }
        },
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          inputProps={{
            sx: {
              textAlign: "right",
              "&::placeholder": {
                textAlign: "right",
              },
            },
          }}
        />
      )}
    />
  );
};

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "@/types/formTypes";
const options = [
  {
    label: "زیر دیپلم",
    value: "no_diploma",
  },
  {
    label: "دیپلم",
    value: "diploma",
  },
  {
    label: "لیسانس",
    value: "bachelors_degree",
  },
  {
    label: "فوق لیسانس",
    value: "masters_degree",
  },
  {
    label: "دکتری",
    value: "doctrate_degree",
  },
];

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: (typeof options)[0]) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

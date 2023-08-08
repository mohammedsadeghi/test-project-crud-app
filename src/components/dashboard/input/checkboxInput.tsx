import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "@/types/formTypes";
const options = [
  {
    label: "فعال",
    value: "active",
  },
  {
    label: "غیر فعال",
    value: "deactive",
  },
];
export const FormInputMultiCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  setValue,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState<string>();
  // handling the selection manually here
  const handleSelect = (value: string) => {
    setSelectedItems(value);
  };
  // setting form value manually here
  useEffect(() => {
    setValue?.(name, selectedItems);
  }, [name, selectedItems, setValue]);
  useEffect(() => {
    setSelectedItems("active");
  }, []);
  return (
    <FormControl size={"small"} variant={"outlined"}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FormLabel component="legend">{label}</FormLabel>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {options.map((option: (typeof options)[0]) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({ field }) => {
                    return (
                      <Checkbox
                        checked={selectedItems === option.value}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </Box>
    </FormControl>
  );
};

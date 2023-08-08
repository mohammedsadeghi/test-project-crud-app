import { Button } from "@mui/material";
import React from "react";
import { useModalContext } from "../modal/addPersonModal";

export const SubmitFormButton = ({ submit }: { submit: () => void }) => {
  const { handleCloseModal } = useModalContext();
  return (
    <>
      <Button onClick={() => submit()} variant={"contained"}>
        ثبت
      </Button>
      <Button onClick={() => handleCloseModal(false)} variant={"outlined"}>
        بستن
      </Button>
    </>
  );
};

"use client";

import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { AddPersonModal } from "../modal/addPersonModal";
import { Form } from "../form/addPesronForm";

export const AddPersonSection = () => {
  const [open, setOpen] = useState(false);
  console.log({ open });
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-start", p: 5 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          افزودن
        </Button>
      </Box>
      <AddPersonModal open={open} handleCloseModal={setOpen}>
        <Form></Form>
      </AddPersonModal>
    </>
  );
};

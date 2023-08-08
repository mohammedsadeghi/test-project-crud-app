"use client";
import { Modal } from "@mui/material";
import { useContext, createContext } from "react";

const ModalContext = createContext(
  {} as {
    open: boolean;
    handleCloseModal: (value: boolean) => void;
  }
);

// Create a custom hook to use the context.
export function useModalContext() {
  return useContext(ModalContext);
}
export const AddPersonModal = ({
  open,
  children,
  handleCloseModal,
}: {
  open: boolean;
  children: React.ReactNode;
  handleCloseModal: (value: boolean) => void;
}) => {
  return (
    <>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalContext.Provider
          value={{
            open,
            handleCloseModal: (value: boolean) => {
              handleCloseModal(value);
              console.log("click");
            },
          }}
        >
          <>{children}</>
        </ModalContext.Provider>
      </Modal>
    </>
  );
};

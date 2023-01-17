import { createContext, useState } from "react";

export const ValidationContext = createContext(null);

export default function ValidationProvider({ children }) {

  const [open, setOpen] = useState(true);
  const [validation, setValidation] = useState(null);

  return (
    <ValidationContext.Provider
      value={{
        open,
        setOpen,
        validation,
        setValidation
      }}
    >
      {children}
    </ValidationContext.Provider>
  )
}
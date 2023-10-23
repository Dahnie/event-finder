import React, { createContext } from "react";
import useDisplayMessage from "../../../hooks/useDisplayMessage";
import {
  ErrorHandlerType,
  SetErrorHandlerType,
  SetSuccessHandlerType,
  SuccessHandlerType,
} from "../../../Types";

interface IToastHandlerProviderProps {
  children: React.ReactNode;
}

export interface IToastHandlerType {
  errorHandlerObj: ErrorHandlerType;
  successHandlerObj: SuccessHandlerType;
  setErrorHandlerObj: SetErrorHandlerType;
  setSuccessHandlerObj: SetSuccessHandlerType;
}

export const ToastHandlerContext = createContext<IToastHandlerType | null>(
  null
);

function ToastHandlerProvider({ children }: IToastHandlerProviderProps) {
  const {
    errorHandlerObj,
    successHandlerObj,
    setErrorHandlerObj,
    setSuccessHandlerObj,
  } = useDisplayMessage();
  return (
    <ToastHandlerContext.Provider
      value={{
        errorHandlerObj,
        successHandlerObj,
        setErrorHandlerObj,
        setSuccessHandlerObj,
      }}
    >
      {children}
    </ToastHandlerContext.Provider>
  );
}

export default ToastHandlerProvider;

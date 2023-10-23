/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetErrorHandlerType } from "../Types";

// Handle API Error Fxn
export const handleAPIError = function (
  err: any,
  setErrorHandlerObj: SetErrorHandlerType
) {
  //  Set the error handdler state
  setErrorHandlerObj({
    hasError: true,
    message:
      err?.response?.data?.detail ||
      err?.response?.data?.message ||
      err?.response?.data ||
      err?.message ||
      "Something Went Wrong. Please Check your Connection and try again",
  });
};

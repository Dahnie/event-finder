import { useEffect, useState } from "react";
import { ErrorHandlerType, SuccessHandlerType } from "../Types";

function useDisplayMessage() {
  // Functions, States and Variables
  // States
  const [errorHandlerObj, setErrorHandlerObj] = useState<ErrorHandlerType>({
    hasError: false,
    message: "",
  });
  const [successHandlerObj, setSuccessHandlerObj] =
    useState<SuccessHandlerType>({
      isSuccess: false,
      message: "",
      subMessage: "",
    });

  // UseEffects
  useEffect(() => {
    //scroll to page top
    if (errorHandlerObj.hasError || successHandlerObj.isSuccess)
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [errorHandlerObj, successHandlerObj]);

  // If response is failure, remove success message
  useEffect(() => {
    if (errorHandlerObj.hasError)
      setSuccessHandlerObj({ isSuccess: false, message: "" });
  }, [errorHandlerObj]);

  // If response is success, remove failure message
  useEffect(() => {
    if (successHandlerObj.isSuccess)
      setErrorHandlerObj({ hasError: false, message: "" });
  }, [successHandlerObj]);

  return {
    errorHandlerObj,
    successHandlerObj,
    setErrorHandlerObj,
    setSuccessHandlerObj,
  };
}

export default useDisplayMessage;

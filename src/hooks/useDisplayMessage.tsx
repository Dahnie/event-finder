import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ErrorHandlerType, SuccessHandlerType } from "../Types";

function useDisplayMessage() {
  // Functions, States and Variables
  const location = useLocation();
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

  useEffect(() => {
    // Clear error state when page or location URL changes
    setErrorHandlerObj({ hasError: false, message: "" });
    setSuccessHandlerObj({ isSuccess: false, message: "" });
  }, [location]);

  return {
    errorHandlerObj,
    successHandlerObj,
    setErrorHandlerObj,
    setSuccessHandlerObj,
  };
}

export default useDisplayMessage;

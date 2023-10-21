import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  SuccessHandlerType,
  SetSuccessHandlerType,
  SetErrorHandlerType,
  ErrorHandlerType,
} from "../../../../Types";
import WaitlistForm from "./WaitlistForm";

interface IProps {
  successHandlerObj: SuccessHandlerType;
  setSuccessHandlerObj: SetSuccessHandlerType;
  errorHandlerObj: ErrorHandlerType;
  setErrorHandlerObj: SetErrorHandlerType;
}

const WaitlistSubscribe: React.FC<IProps> = ({
  successHandlerObj,
  setSuccessHandlerObj,
  errorHandlerObj,
  setErrorHandlerObj,
}) => {
  const URL =
    "https://getaltepay.us21.list-manage.com/subscribe/post?u=43698c399891dd0456fe0277e&amp;id=f3bb19020f";

  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }: any) => {
        return (
          <WaitlistForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
            successHandlerObj={successHandlerObj}
            setSuccessHandlerObj={setSuccessHandlerObj}
            errorHandlerObj={errorHandlerObj}
            setErrorHandlerObj={setErrorHandlerObj}
          />
        );
      }}
    />
  );
};

export default WaitlistSubscribe;

import { MouseEvent, useEffect, useState, useContext } from "react";
import styles from "./WaitlistForm.module.css";
import { decode } from "html-entities";
import PrimaryButton from "../../../../components/buttons/primary-button/PrimaryButton";
import { SubscriberEmailContext } from "../../../../components/contexts/SubscriberEmailContext";
import { UserInfoModalContext } from "../../../../components/contexts/UserInfoModalContext";

function WaitlistForm({
  status,
  message,
  onValidated,
  setSuccessHandlerObj,
  successHandlerObj,
  errorHandlerObj,
  setErrorHandlerObj,
}: any) {
  const [email, setEmail] = useState("");
  const { setSubscriberEmail }: any = useContext(SubscriberEmailContext);
  const { setIsModalOpened }: any = useContext(UserInfoModalContext);

  const handleSubmitWaitlistEmail = (e: MouseEvent<HTMLButtonElement>) => {
    setErrorHandlerObj({ hasError: false, message: "" });
    setSuccessHandlerObj({ isSuccess: false, message: "" });

    if (email === "") {
      e.preventDefault();
      setErrorHandlerObj({
        hasError: true,
        message: "Please enter a valid email address",
      });

      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setSubscriberEmail(email);
      return isFormValidated;
    }
  };

  const getMessage = (message: any) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  useEffect(() => {
    if (successHandlerObj.isSuccess) {
      setEmail("");

      // Remove success message after 20 seconds
      setTimeout(() => {
        setSuccessHandlerObj({ isSuccess: false, message: "" });
      }, 20000);
    }
  }, [successHandlerObj]);

  useEffect(() => {
    if (status === "success") {
      // Open User Info Modal For user to fill in expected features and their full name
      setIsModalOpened(true);
      setSuccessHandlerObj({
        isSuccess: true,
        message: "You have successfully subscribed to Altepay!",
      });
    }
  }, [status]);

  return (
    <>
      <form
        className={`waitlist-form-container ${
          successHandlerObj.isSuccess ? "none" : ""
        }`}
      >
        <div className={`form-group ${styles.subscribe_form_input_wrapper}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your mail"
          />
        </div>
        <PrimaryButton
          placeholder={status === "sending" ? "Joining..." : "Join Waitlist"}
          onClick={handleSubmitWaitlistEmail}
          className={styles.subscribe_button_wrapper}
        />
      </form>

      <div className={styles.app_form_info}>
        {status === "error" || errorHandlerObj.hasError ? (
          <div
            className={styles.app_form_error}
            dangerouslySetInnerHTML={{
              __html: errorHandlerObj.message || getMessage(message),
            }}
          />
        ) : null}
      </div>
      {status === "success" &&
        status !== "error" &&
        !errorHandlerObj.hasError && (
          <div
            className={`email-success-container ${
              successHandlerObj.isSuccess ? "" : "none"
            }`}
          >
            {successHandlerObj.message}
          </div>
        )}
    </>
  );
}

export default WaitlistForm;

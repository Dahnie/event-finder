import { useState, useEffect } from "react";
import cancelImg from "../../assets/images/svg/cancel.svg";
import styles from "./ErrorHandler.module.css";

interface IProps {
  errorHandlerObj: {
    hasError: boolean;
    message: string;
  };
  className?: string;
  animationDirection?: string;
}

const ErrorHandler = function ({
  errorHandlerObj,
  className,
  animationDirection,
}: IProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    if (errorHandlerObj.hasError) {
      setShow(true);
    }
  }, [errorHandlerObj]);

  return (
    <>
      {show ? (
        <div
          className={`${styles.error_handler_container} ${className || ""} ${
            styles[`slide_in_${animationDirection || "left"}`]
          }`}
        >
          {/* {className} */}
          <div className={styles.error_handler_header}>
            <div className="error-handler-title">{errorHandlerObj.message}</div>

            <div className={styles.cancel_error_button_wrrapper}>
              <button onClick={() => setShow(false)}>
                <img src={cancelImg} alt="cancel-icon" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorHandler;

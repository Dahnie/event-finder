import React from "react";
import "./PrimaryButton.css";

// Interfaces
interface IProps {
  className?: string;
  placeholder: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function PrimaryButton({
  className,
  placeholder,
  disabled = false,
  onClick,
}: IProps) {
  return (
    <div className={`primary-button-wrapper ${className}`}>
      <button disabled={disabled} onClick={onClick}>
        {placeholder}
      </button>
    </div>
  );
}

export default PrimaryButton;

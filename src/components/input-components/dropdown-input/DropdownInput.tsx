import "./DropdownInput.css";
import dropdownIcon from "../../../assets/images/svg/angle-down.svg";
import { IDropdownOption } from "../../../Types";
import { ChangeEvent } from "react";

interface IProps {
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  required?: boolean;
  optionArray: IDropdownOption[];
}
const DropdownInput = ({
  className = "",
  value,
  onChange,
  id,
  name,
  required,
  optionArray,
  label,
}: IProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="select-dropdown-wrapper">
        <select
          name={name}
          id={id}
          className={className}
          required={required}
          value={value}
          onChange={onChange}
        >
          {optionArray.map((optionValue, i) => (
            <option
              key={i + 1}
              disabled={optionValue.default ? true : false}
              value={optionValue.key}
              hidden={optionValue.default ? true : false}
            >
              {optionValue.value}
            </option>
          ))}
        </select>
        <div className="dropdown-icon">
          <img src={dropdownIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default DropdownInput;

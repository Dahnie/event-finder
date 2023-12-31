import { useState, ChangeEvent } from "react";
import calenderIcon from "../../../assets/images/svg/calender-icon.svg";

// Interface
interface IProps {
  id: string;
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

function FilterDateInput({
  id,
  className = "",
  placeholder,
  value,
  onChange,
  required,
}: IProps) {
  // Functions, states and variables
  const [dateFilterType, setDateFilterType] = useState("text");

  return (
    <div className="form-group filter-date-form-group">
      <input
        id={id}
        className={className}
        type={dateFilterType}
        value={value}
        onChange={onChange}
        onBlur={() => setDateFilterType("text")}
        onFocus={() => setDateFilterType("date")}
        placeholder={placeholder}
        required={required}
      />

      {dateFilterType === "text" && (
        <div className="calender-icon">
          <img src={calenderIcon} alt="calender-icon" />
        </div>
      )}
    </div>
  );
}

export default FilterDateInput;

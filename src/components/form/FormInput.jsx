import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = ({
  label,
  type = "text",
  name,
  disabled,
  value,
  onChange,
  inputIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  if (type === "textarea") {
    return (
      <div>
        <label className="block mb-1 text-xl font-bold">{label}</label>
        <textarea
          name={name}
          rows={4}
          placeholder={`الرجاء ادخال ${label} ..`}
          value={value}
          onChange={onChange}
          className="w-full min-h-[9rem] max-h-[9rem] rounded-xl border-2 border-gray-300 p-2 lg:p-4 text-xl outline-0"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="block mb-1 text-xl font-bold">{label}</label>
      <div
        className={`flex items-center gap-1 w-full rounded-full border-2 border-gray-300 px-4 ${
          disabled ? "bg-gray-200" : ""
        }`}
      >
        {inputIcon && (
          <span className="text-2xl text-main-clr-2">{inputIcon}</span>
        )}

        <input
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={`الرجاء ادخال ${label} ..`}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`flex-1 outline-0 py-4 text-xl ${
            disabled ? "cursor-not-allowed" : ""
          }`}
        />

        {isPassword && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer text-2xl text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInput;

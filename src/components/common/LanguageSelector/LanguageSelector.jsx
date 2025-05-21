import { useState } from "react";
import arFlag from "../../../assets/images/ar.png";
import engFlag from "../../../assets/images/eng.png";
import DropDown from "../DropDown/DropDown";
import { IoMdArrowDropdown } from "react-icons/io";

const LanguageSelector = () => {
  const [countryDropdown, setCountryDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ar");

  const languages = [
    { code: "ar", label: "العربية", flag: arFlag },
    { code: "en", label: "English", flag: engFlag },
  ];

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
    setCountryDropdown(false);
  };

  const currentLang = languages.find((lang) => lang.code === selectedLang);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setCountryDropdown((prev) => !prev)}
      >
        <div className="flex items-center gap-1 w-max">
          <img
            loading="lazy"
            src={currentLang.flag}
            className="w-8"
            alt={currentLang.label}
          />
          <p>{currentLang.label}</p>
        </div>
        <span className="text-3xl">
          <IoMdArrowDropdown />
        </span>
      </button>

      <DropDown isOpen={countryDropdown}>
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className="flex items-center gap-1 p-2 cursor-pointer hover:bg-gray-100"
          >
            <img
              loading="lazy"
              src={lang.flag}
              className="w-8"
              alt={lang.label}
            />
            <p>{lang.label}</p>
          </div>
        ))}
      </DropDown>
    </div>
  );
};

export default LanguageSelector;

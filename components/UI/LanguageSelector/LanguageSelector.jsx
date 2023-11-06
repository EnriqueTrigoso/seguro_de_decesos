import Select from "react-select";
import { useState } from "react";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import style from "./LanguageSelector.module.css";
import { getLanguage } from "utils/functions";

const formatOptionLabel = ({ value }) => (
  <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
    {value}
  </div>
);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused ? "transparent" : provided.borderColor,
  }),
};

const LanguageSelector = () => {
  const { language } = useLanguage();
  const languageOptions = [
    {
      value: "es",
    },
    {
      value: "ca",
    },
    {
      value: "eu",
    },
    {
      value: "ro",
    },
    {
      value: "es-PE",
    },
    {
      value: "es-CO",
    },
    {
      value: "it",
    },
    {
      value: "gl",
    },
    {
      value: "sv",
    },
    {
      value: "el",
    },
    {
      value: "ru",
    },
    {
      value: "ar",
    },
    {
      value: "hi",
    },
    {
      value: "ko",
    },
    {
      value: "fil",
    },
    {
      value: "zh",
    },
  ];

  const sortedLanguageOptions = [...languageOptions].sort((a, b) => {
    if (a.value === language) return -1;
    if (b.value === language) return 1;
    return 0;
  });

  const [selectedOption, setSelectedOption] = useState(
    sortedLanguageOptions[0]
  );

  const handleChange = (option) => {
    setSelectedOption(option);
    if (option.value) {
      window.location.href = `https://www.${getLanguage(option.value).domain}`;
    }
  };

  return (
    <div className={style.selector}>
      <Select
        id="languages-selector"
        aria-label="Etiqueta descriptiva del react-select"
        options={sortedLanguageOptions}
        formatOptionLabel={formatOptionLabel}
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageSelector;

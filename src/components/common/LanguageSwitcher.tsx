import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      console.log("Mobile screen detected, not running GSAP animations.");
      return;
    }
  }, [language]);

  const handleLanguageChange = (lng: string) => {
    console.log("Changing language to:", lng);
    changeLanguage(lng);
  };

  // Language code mapping
  const languageCodeMapping: { [key: string]: string } = {
    "pt-BR": "pt",
    "en-US": "en",
  };

  const mappedLanguage = languageCodeMapping[language] || language;

  return (
    <div className="flex items-center justify-center h-full gap-2 px-1 py-1 bg-pink-800 rounded-full lg:px-5 lg:gap-5 bg-opacity-80">
      <button
        onClick={() => handleLanguageChange("en")}
        className="p-1 rounded-full"
        style={{
          backgroundColor: mappedLanguage === "en" ? "#de70a1" : undefined,
        }}
      >
        <img src="/Icons/flagIcons/usIcon.png" alt="English" className="w-7 h-7" />
      </button>
      <button
        onClick={() => handleLanguageChange("pt")}
        className="p-1 rounded-full"
        style={{
          backgroundColor: mappedLanguage === "pt" ? "#de70a1" : undefined,
        }}
      >
        <img src="/Icons/flagIcons/brazilIcon.png" alt="Portuguese" className="w-7 h-7" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

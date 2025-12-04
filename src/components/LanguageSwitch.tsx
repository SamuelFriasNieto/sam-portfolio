import React from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {

    const {t, i18n} = useTranslation();

    const handleTrans = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    }

  return (
    <div className="flex items-center justify-center z-10">
      <Languages onClick={() => handleTrans()} strokeWidth={1} />
    </div>
  );
};

export default LanguageSwitch;

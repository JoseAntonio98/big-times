import React from "react";

import "./styles/DiaryEmpty.css";
import { useTranslation } from "react-i18next";

const DiaryEmpty: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container-center">
      <h1 className="ee-title">{t("emptyDiaryTitle")}</h1>
      <p className="ee-message">{t("emptyDiaryText")}</p>
    </div>
  );
};

export default DiaryEmpty;

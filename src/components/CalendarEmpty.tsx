import React from "react";
import { useTranslation } from "react-i18next";

const CalendarEmpty: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container-center">
      <h1 className="ee-title">{t("emptyCalendarTitle")}</h1>
      <p className="ee-message">{t("emptyCalendarText")}</p>
    </div>
  );
};

export default CalendarEmpty;

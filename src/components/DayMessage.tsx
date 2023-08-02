import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import "./styles/DayMessage.css";
import { useTranslation } from "react-i18next";

interface DayMessageProps {
  title: string;
  entries: any;
}

const DayMessage: React.FC<DayMessageProps> = ({ title, entries }) => {
  const { t } = useTranslation();

  const lastAdviceEntry = entries
    ?.slice()
    .reverse()
    .find((entry: any) => entry.advice !== undefined && entry.advice !== "");

  console.log(lastAdviceEntry);

  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="custom-dm-message">
        {lastAdviceEntry != null ? lastAdviceEntry.advice : t("adviceEmpty")}
      </IonCardContent>
    </IonCard>
  );
};

export default DayMessage;

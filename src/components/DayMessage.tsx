import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import "./styles/DayMessage.css";

interface DayMessageProps {
  title: string;
  entries: any;
}

const DayMessage: React.FC<DayMessageProps> = ({ title, entries }) => {
  const lastAdviceEntry = entries
    ?.slice()
    .reverse()
    .find((entry: any) => entry.advice !== undefined && entry.advice !== "");

  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="custom-dm-message">
        {lastAdviceEntry.advice}
      </IonCardContent>
    </IonCard>
  );
};

export default DayMessage;

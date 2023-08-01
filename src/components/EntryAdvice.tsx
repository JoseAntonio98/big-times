import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import "./styles/DayMessage.css";

interface EntryAdviceProps {
  title: string;
  message: string;
}

// ChatGPT advice based on description entry
const EntryAdvice: React.FC<EntryAdviceProps> = ({ title, message }) => {
  return (
    <IonCard color="primary" className="ion-margin">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="custom-dm-message">{message}</IonCardContent>
    </IonCard>
  );
};

export default EntryAdvice;

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
}

const DayMessage: React.FC<DayMessageProps> = ({ title }) => {
  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="custom-dm-message">
        Here will be a AI message according the last user entry. For example:
        "You are capable of greatness. Believe in yourself. Embrace challenges
        as opportunities. Stay determined and persevere."
      </IonCardContent>
    </IonCard>
  );
};

export default DayMessage;

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import "./styles/DayMessage.css";

const DayMessage: React.FC = () => {
  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">
          Day Message for you!
        </IonCardTitle>
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

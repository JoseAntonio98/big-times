import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  } from "@ionic/react";
  import React from "react";
  import "./styles/DayMessage.css";
  
  // ChatGPT advice based on description entry
  const EntryAdvice: React.FC = () => {
    return (
      <IonCard color="primary" className="ion-margin">
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">
            Advice Message for you!
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
  
  export default EntryAdvice;
  
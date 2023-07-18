import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

import "./styles/Entry.css";

const Entry: React.FC<any> = ({ entry }) => {
  const { title, description, date, mood } = entry;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
        {mood ? (
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor:
                mood == "happy"
                  ? "var(--ion-color-success)"
                  : mood == "angry"
                  ? "var(--ion-color-danger)"
                  : "var(--ion-color-tertiary)",
              position: "absolute",
              right: "8px",
              top: "8px",
              borderRadius: "50%",
            }}
          ></div>
        ) : null}
      </IonCardHeader>

      <IonCardContent>{description}</IonCardContent>
    </IonCard>
  );
};

export default Entry;

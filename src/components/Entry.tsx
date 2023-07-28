import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

import "./styles/Entry.css";

const Entry: React.FC<any> = ({ entry, onClick }) => {
  const { title, description, date, mood } = entry;

  return (
    <IonCard onClick={onClick}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
        {mood ? (
          <div
            style={{
              width: "24px",
              height: "24px",
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            {mood == "happy" ? (
              <span className="emoji-small">&#128512;</span>
            ) : mood == "angry" ? (
              <span className="emoji-small">&#128544;</span>
            ) : mood == "sad" ? (
              <span className="emoji-small">&#128546;</span>
            ) : null}
          </div>
        ) : null}
      </IonCardHeader>

      <IonCardContent>{description}</IonCardContent>
    </IonCard>
  );
};

export default Entry;

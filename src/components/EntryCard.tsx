import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

import "./styles/EntryCard.css";

const EntryCard: React.FC<any> = ({ entry, onClick }) => {
  const { title, description, date, mood } = entry;

  return (
    <IonCard onClick={onClick}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{date.toDate().toString()}</IonCardSubtitle>
        {mood ? (
          <div
            className="mood-ctn"
            // style={{
            //   backgroundColor:
            //     mood == "happy"
            //       ? "var(--ion-color-success)"
            //       : mood == "angry"
            //       ? "var(--ion-color-danger)"
            //       : "var(--ion-color-tertiary)",
            // }}
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

export default EntryCard;

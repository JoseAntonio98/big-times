import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText,
} from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import React from "react";

import "./styles/Entries.css";

interface EntriesProps {
  title?: string;
  entries: any[];
}

const Entries: React.FC<EntriesProps> = ({ title, entries }) => {
  return (
    <div className={title ? "entries-container" : "entries-container margin"}>
      {title ? (
        <div className="entries-header">
          <h1>{title}</h1>
          <IonText className="entries-more">
            <p>See all</p>
            <IonIcon icon={chevronForward}></IonIcon>
          </IonText>
        </div>
      ) : null}

      {entries.map((entry, index) => (
        <IonCard key={index} color="primary">
          <IonCardHeader>
            <IonCardTitle>03 | July 2024, Wednesday</IonCardTitle>
            <IonCardSubtitle>Mom's birthday</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default Entries;

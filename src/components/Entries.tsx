import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText
} from "@ionic/react";
import { arrowForward, chevronForward } from "ionicons/icons";
import React from "react";

import "./Entries.css";

interface EntriesProps {
  title: string;
}

const Entries: React.FC<EntriesProps> = ({ title }) => {
  return (
    <div className="entries-container">
      <div className="entries-header">
        <h1>{title}</h1>
        <IonText className="entries-more">
          <p>See all</p>
          <IonIcon icon={chevronForward}></IonIcon>
        </IonText>
      </div>
      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>03 | July 2024, Wednesday</IonCardTitle>
          <IonCardSubtitle>Mom's birthday</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>03 | July 2024, Wednesday</IonCardTitle>
          <IonCardSubtitle>Mom's birthday</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Entries;

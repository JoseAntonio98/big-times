import React, { useState } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonDatetime,
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonDatetimeButton,
} from "@ionic/react";
import { chevronBackOutline, pencilOutline, trash } from "ionicons/icons";

import "./styles/EntryModal.css";

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: any;
}

const EntryModal: React.FC<EntryModalProps> = ({ isOpen, onClose, entry }) => {
  const { id, title, description, date, mood } = entry;
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (id: number) => {
    console.log(`Saving entry ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting entry ${id}`);
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={onClose}>
              <IonIcon icon={chevronBackOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => handleSave(id)}
              strong={true}
              color="primary"
            >
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList className="edit-options">
          <IonItem className="edit-option">
            <IonIcon
              onClick={() => setIsEditing(!isEditing)}
              icon={pencilOutline}
              color="primary"
              size="medium"
            />
          </IonItem>
          <IonItem className="edit-option">
            <IonIcon
              icon={trash}
              color="danger"
              size="medium"
              onClick={() => handleDelete(id)}
            />
          </IonItem>
        </IonList>

        {/* TODO: Improve styles */}
        <IonItem>
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime" disabled={!isEditing}></IonDatetime>
          </IonModal>
        </IonItem>

        <IonItem>
          <IonInput value={entry.title} disabled={!isEditing}></IonInput>
        </IonItem>

        <IonItem>
          <IonTextarea
            value={entry.description}
            rows={10}
            disabled={!isEditing}
          ></IonTextarea>
        </IonItem>
      </IonContent>
    </IonModal>
  );
};

export default EntryModal;

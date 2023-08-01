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
import {
  camera,
  chevronBackOutline,
  happy,
  image,
  mic,
  pencilOutline,
  trash,
} from "ionicons/icons";

import "./styles/EntryModal.css";
import EntryAdvice from "./EntryAdvice";
import HeaderScreen from "./HeaderScreen";
import MoodModal from "./MoodModal";

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: any;
}

const EntryModal: React.FC<EntryModalProps> = ({ isOpen, onClose, entry }) => {
  const { id, title, description, date, mood } = entry;
  const [isEditing, setIsEditing] = useState(false);

  const [showMoodModal, setShowMoodModal] = useState(false);

  const openMoodModal = () => {
    setShowMoodModal(true);
  };
  const closeMoodModal = () => {
    setShowMoodModal(false);
  };

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
        <IonList className="options">
          <IonItem onClick={openMoodModal}>
            {mood ? (
              <div className="">
                {mood == "happy" ? (
                  <span className="emoji-small">&#128512;</span>
                ) : mood == "angry" ? (
                  <span className="emoji-small">&#128544;</span>
                ) : mood == "sad" ? (
                  <span className="emoji-small">&#128546;</span>
                ) : null}
              </div>
            ) : null}
          </IonItem>

          <div className="edit-options">
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
          </div>
        </IonList>

        {/* TODO: Improve styles */}
        <IonList>
          <IonItem>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
          </IonItem>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime" disabled={!isEditing}></IonDatetime>
          </IonModal>

          <IonItem>
            <IonInput
              value={title}
              disabled={!isEditing}
              className="custom"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea
              value={description}
              rows={10}
              disabled={!isEditing}
              className="custom"
            ></IonTextarea>
          </IonItem>
        </IonList>

        <EntryAdvice />

        {/* TODO: Ver si van estas opciones | NO TAN IMPORTANTE */}
        <IonList className="form-actions" lines="none">
          <IonItem>
            <IonIcon icon={image}></IonIcon>
          </IonItem>
          <IonItem>
            <IonIcon icon={mic}></IonIcon>
          </IonItem>
          <IonItem>
            <IonIcon icon={camera}></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>

      {showMoodModal && (
        <MoodModal isOpen={showMoodModal} onClose={() => closeMoodModal()} />
      )}
    </IonModal>
  );
};

export default EntryModal;

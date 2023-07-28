import React from "react";
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
import { camera, chevronBackOutline, happy, image, mic } from "ionicons/icons";
import HeaderScreen from "./HeaderScreen";

import "./styles/AddEntryModal.css";

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ isOpen, onClose }) => {
  // TODO: Change for Entry object to save in Firebase
  const handleSave = (id: number) => {
    console.log(`Saving entry ${id}`);
  };

  const handleAddImage = () => {
    console.log("Picking image");
  };
  const handleRecordDescription = () => {
    console.log("Recording");
  };
  const handleAddMood = () => {
    console.log("Picking mood");
  };
  const handleTextRecognition = () => {
    console.log("Text Recognition...");
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
              onClick={() => handleSave(1)}
              strong={true}
              color="primary"
            >
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div style={{ padding: "1rem" }}>
          <HeaderScreen title="Write an entry" />

          <IonItem style={{"marginLeft": "-1rem"}}>
            <IonDatetimeButton
              datetime="datetime"
              className="ion-margin-bottom ion-margin-top"
            ></IonDatetimeButton>
          </IonItem>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime"></IonDatetime>
          </IonModal>

          <IonInput
            className="ion-margin-bottom"
            label="Title: "
            labelPlacement="floating"
            placeholder="A description for you momemnt"
            fill="outline"
            counter={true}
            maxlength={40}
            clearInput={true}
          ></IonInput>

          <IonTextarea
            className="ion-margin-bottom"
            placeholder="Write all you want!"
            label="Description:"
            labelPlacement="floating"
            rows={10}
            fill="outline"
          ></IonTextarea>

          <IonList className="form-actions" lines="none">
            <IonItem>
              <IonIcon icon={image} onClick={handleAddImage}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={mic} onClick={handleRecordDescription}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={happy} onClick={handleAddMood}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={camera} onClick={handleTextRecognition}></IonIcon>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AddEntryModal;

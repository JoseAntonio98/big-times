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
import { useForm } from "react-hook-form";
import { camera, chevronBackOutline, happy, image, mic } from "ionicons/icons";
import HeaderScreen from "./HeaderScreen";

import "./styles/AddEntryModal.css";
import MoodModal from "./MoodModal";
import { add_note } from "../Utilities/user_firestore";
import { auth } from "../FirebaseConfig";
import myToast from "../Utilities/myToast";

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ isOpen, onClose }) => {
  
  const [showMoodModal, setShowMoodModal] = useState(false);
  const { register, handleSubmit, setValue } = useForm({defaultValues: {title:"", description:"",date: new Date(), mood:"happy"}});

  const openMoodModal = () => {
    setShowMoodModal(true);
  };
  const closeMoodModal = () => {
    setShowMoodModal(false);
  };

  const handleSaveData = handleSubmit( async (data) => {
    //console.log(data);
    await add_note(auth.currentUser!.uid, data.title, data.description, data.date, data.mood)
  });

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
              onClick={handleSaveData}
              type="submit"
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

          <IonItem
            {...register("date", { valueAsDate: true })}
            style={{ marginLeft: "-1rem" }}
          >
            <IonDatetimeButton
              datetime="datetime"
              className="ion-margin-bottom ion-margin-top"
            ></IonDatetimeButton>
          </IonItem>
          <IonModal keepContentsMounted={true}>
            <IonDatetime
              id="datetime"
              onIonChange={(data: any) => {
                setValue("date", data.detail.value);
              }}
            ></IonDatetime>
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
            {...register("title", { required: true })}
          ></IonInput>

          <IonTextarea
            className="ion-margin-bottom"
            placeholder="Write all you want!"
            label="Description:"
            labelPlacement="floating"
            rows={10}
            fill="outline"
            {...register("description", { required: true })}
          ></IonTextarea>

          <IonList className="form-actions" lines="none">
            <IonItem>
              <IonIcon icon={image} onClick={handleAddImage}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={mic} onClick={handleRecordDescription}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={happy} onClick={openMoodModal}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={camera} onClick={handleTextRecognition}></IonIcon>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      {showMoodModal && (
        <MoodModal isOpen={showMoodModal} onClose={() => closeMoodModal()} />
      )}
    </IonModal>
  );
};

export default AddEntryModal;

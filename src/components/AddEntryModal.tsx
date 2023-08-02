import React, { useState, useEffect } from "react";
import {
  IonLoading,
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
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { camera, chevronBackOutline, happy, image, mic } from "ionicons/icons";
import HeaderScreen from "./HeaderScreen";

import "./styles/AddEntryModal.css";
import MoodModal from "./MoodModal";
import { add_note } from "../Utilities/user_firestore";
import { ref, uploadBytes } from "firebase/storage"
import { auth, storage } from "../FirebaseConfig";
import { useTranslation } from "react-i18next";
import { usePhotoGallery, UserPhoto, base64FromPath } from "../Utilities/usePhotoGallery";

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Note {
  title:String,
  description: String,
  date: Date,
  mood: String,
  advice: String,
  photos: UserPhoto[],
  photosUrl: String[]
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [showMoodModal, setShowMoodModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photosUrl, setPhotosUrl] = useState([""])
  const { photos, takePhoto  } = usePhotoGallery()
  const { register, handleSubmit, setValue } = useForm<Note>({
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
      mood: "happy",
      advice: "",
      photos: [],
      photosUrl: []
    },
  });
  
  useEffect (() => {
    setValue("photos", photos)
  },[photos])
  

  const openMoodModal = () => {
    setShowMoodModal(true);
  };
  const closeMoodModal = () => {
    setShowMoodModal(false);
  };

  const upload_note_images = async (photos: UserPhoto[]) => {

    //console.log(photos)
    photos.map( async (photo) => {
      const imageRef = ref(storage, `images/${auth.currentUser!.uid}/${photo.filepath}`)
      const response = await fetch(photo.webviewPath!);
      const blob = await response.blob();
      uploadBytes(imageRef, blob).then((response)=>{
        // colocarlo en la varaible photoURL
        // mandarlo con los datos
        const path = response.ref.fullPath
        setPhotosUrl(photosUrl.concat(path))
      })
    });

  };

  const handleSaveData = handleSubmit(async (data) => {
    
    setLoading(true);
    await upload_note_images(data.photos)

    //console.log(photosUrl)

    await add_note(
      auth.currentUser!.uid,
      data.title,
      data.description,
      data.date,
      data.mood,
      data.advice,
      photosUrl
    ).then(() => {
      setLoading(false);
      onClose();
    });

  });

  const handleAddImage = async () => {
    console.log("Picking image");
    await takePhoto();
  };  

  const handleRecordDescription = () => {
    console.log("Recording");
  };

  const handleUpdateMood = (_mood: String) => {
    setValue("mood", _mood)
  }

  const handleTextRecognition = () => {
    console.log("Text Recognition...");
  };

  if (loading) {
    return (
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={"Save note..."}
      />
    );
  }

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
              {t("saveButton")}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div style={{ padding: "1rem" }}>
          <HeaderScreen title={t("ADD_ENTRY")} />

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
            label={t("entryTitleLabel")}
            labelPlacement="floating"
            placeholder={t("entryTitlePlaceholder")}
            fill="outline"
            counter={true}
            maxlength={40}
            clearInput={true}
            {...register("title", { required: true })}
          ></IonInput>

          <IonTextarea
            className="ion-margin-bottom"
            placeholder={t("entryDescriptionPlaceholder")}
            label={t("entryDescriptionLabel")}
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
            <IonItem {...register("mood")}>
              <IonIcon icon={happy} onClick={openMoodModal}></IonIcon>
            </IonItem>
            <IonItem>
              <IonIcon icon={camera} onClick={handleTextRecognition}></IonIcon>
            </IonItem>
          </IonList>
        </div>
        <div>
          <IonGrid>
            <IonRow {...register("photos")}>
              {photos.map( (photo, index ) => (
                <IonCol size="4" key={photo.filepath}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>

      {showMoodModal && (
        <MoodModal isOpen={showMoodModal} updateMood={handleUpdateMood} onClose={() => closeMoodModal()} />
      )}
    </IonModal>
  );
};

export default AddEntryModal;

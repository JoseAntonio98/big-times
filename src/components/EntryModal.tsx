import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import MoodModal from "./MoodModal";
import moment from "moment";
import { delete_note, update_note } from "../Utilities/user_firestore";
import { useTranslation } from "react-i18next";

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: any;
}

const EntryModal: React.FC<EntryModalProps> = ({ isOpen, onClose, entry }) => {
  const { t } = useTranslation();

  const { id, title, description, date, mood } = entry;
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: title,
      description: description,
      date: new Date(date.toDate()),
      mood: mood,
    },
  });
  const [showMoodModal, setShowMoodModal] = useState(false);

  const openMoodModal = () => {
    setShowMoodModal(true);
  };
  const closeMoodModal = () => {
    setShowMoodModal(false);
  };

  const handleSaveData = handleSubmit(async (data) => {
    await update_note(id, data.title, data.description, data.date, data.mood);
    onClose();
  });

  const handleDelete = async (id: string) => {
    setLoading(true);
    console.log(`Deleting entry ${id}`);
    await delete_note(id).then(() => {
      setLoading(false);
      onClose();
    });
  };

  if (loading) {
    return (
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={"Delete note..."}
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
              disabled={!isEditing}
            >
              {t("saveButton")}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList className="options">
          <IonItem disabled={!isEditing} onClick={openMoodModal}>
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
          <IonItem {...register("date", { valueAsDate: true })}>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
          </IonItem>
          <IonModal keepContentsMounted={true}>
            <IonDatetime
              id="datetime"
              disabled={!isEditing}
              value={moment(date.toDate()).toISOString(true)}
              onIonChange={(data: any) => {
                setValue("date", data.detail.value);
              }}
            ></IonDatetime>
          </IonModal>

          <IonItem>
            <IonInput
              value={title}
              disabled={!isEditing}
              className="custom"
              {...register("title")}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea
              value={description}
              rows={10}
              disabled={!isEditing}
              className="custom"
              {...register("description")}
            ></IonTextarea>
          </IonItem>
        </IonList>

        <EntryAdvice title={t("entryIaTipTitle")} />

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

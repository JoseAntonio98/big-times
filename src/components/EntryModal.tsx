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
  IonSpinner,
} from "@ionic/react";
import {
  camera,
  chevronBackOutline,
  image,
  mic,
  pencilOutline,
  trash,
} from "ionicons/icons";

import { OPENAI_API_KEY } from "../openaiConfig";
import { OpenAIApi, Configuration } from "openai";

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

  const { id, title, description, date, mood, advice } = entry;
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: title,
      description: description,
      date: new Date(date.toDate()),
      mood: mood,
      advice: advice
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
    await update_note(id, data.title, data.description, data.date, data.mood, data.advice);
    //console.log(data)
    onClose();
  });

  const handleDelete = async (id: string) => {
    setLoading(true);
    //console.log(`Deleting entry ${id}`);
    await delete_note(id).then(() => {
      setLoading(false);
      onClose();
    });
  };

  // CHATGPT Configuration
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // TODO: CARGAR INICIALMENTE CON EL VALOR GUARDADO EN LA BASE DE DATOS SI TUVIESE, CASO CONTRARIO VACIO
  const [_advice, setAdvice] = useState(advice);
  const [adviceLoading, setAdviceLoading] = useState(false);

  /*const generateAdviceEx = async () => {
    setAdviceLoading(true);
    setValue("advice", "adviceByAi")
    setAdvice("adviceByAi")
    setAdviceLoading(false);
  }*/

  const generateAdvice = async () => {
    setAdviceLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Genera un consejo motivacional conciso, de máximo 50 tokens, y completo para el siguiente contexto ${description}`,
          },
        ],
        max_tokens: 50,
      });

      const adviceByAi = response.data.choices[0].message?.content;
      console.log(response);
      console.log(adviceByAi);

      setAdvice(adviceByAi || "");
      setValue("advice", adviceByAi)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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

        {_advice.length === 0 ? (
          <div className="advice-ctn">
            {adviceLoading ? (
              <IonSpinner />
            ) : (
              <div>
                <p className="advice-ctn-title">{t("adviceQuestion")}</p>
                <IonButton
                  fill="outline"
                  color="primary"
                  disabled={!isEditing}
                  onClick={generateAdvice}
                  {...register("advice")}
                >
                  {t("adviceButton")}
                </IonButton>
              </div>
            )}
          </div>
        ) : (
          <EntryAdvice title={t("entryIaTipTitle")} message={_advice} />
        )}
      </IonContent>

      {showMoodModal && (
        <MoodModal isOpen={showMoodModal} onClose={() => closeMoodModal()} />
      )}
    </IonModal>
  );
};

export default EntryModal;

import {
  IonButton,
  IonContent,
  IonDatetime,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTextarea,
} from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";

import "./styles/AddPage.css";
import { attach, camera, happy, image, mic, text } from "ionicons/icons";
import { useState } from "react";

const AddPage: React.FC = () => {
  const handleSave = () => {
    // Save entry
  };

  // TODO: Dar estilos a Datetime Picker
  // https://www.youtube.com/watch?v=UEfFjfW7Zes

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <HeaderScreen title="Write an entry" />

          <IonList>
            <IonItem>
              <IonDatetime
                placeholder="Seleccione una fecha"
                presentation="date-time"
              ></IonDatetime>
            </IonItem>

            <IonItem>
              <IonInput
                className="input"
                label="Title: "
                labelPlacement="floating"
                placeholder="A description for you momemnt"
                fill="outline"
                counter={true}
                maxlength={40}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonTextarea
                className="input"
                placeholder="Write all you want!"
                label="Description:"
                labelPlacement="floating"
                rows={10}
                fill="outline"
              ></IonTextarea>
            </IonItem>

            <IonList className="form-actions" lines="none">
              <IonItem>
                <IonIcon icon={image}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={mic}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={happy}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={camera}></IonIcon>
              </IonItem>
            </IonList>

            <IonButton className="btn-save" expand="block">
              <IonText className="text-save">Save</IonText>
            </IonButton>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddPage;

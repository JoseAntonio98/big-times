import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import HeaderScreen from "../../components/HeaderScreen";

import {
  camera,
  chevronBackOutline,
  happy,
  image,
  mic,
} from "ionicons/icons";

import "./AddPage.css";

// TODO: Delete this page. REPLACED by modal

const AddPage: React.FC = () => {
  const handleSave = (entry: any) => {
    console.log(entry);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              color="medium"
              // TODO: Navigate back or Change to a modal
              // onClick={() => navigate("/home/diary")}
            >
              <IonIcon icon={chevronBackOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => handleSave("")}
              strong={true}
              color="primary"
            >
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddPage;

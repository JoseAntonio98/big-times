import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTextarea,
} from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import "./AddPage.css";
import {
  attach,
  camera,
  happy,
  image,
  mic,
  text,
} from "ionicons/icons";

const AddPage: React.FC = () => {
  const handleSave = () => {
    // Save entry
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader title="Write an entry" />

          <IonList className="form-container">
            <IonInput
              className="input"
              label="Title: "
              labelPlacement="floating"
              placeholder="A description for you momemnt"
              fill="outline"
              counter={true}
              maxlength={40}
            ></IonInput>
            <IonTextarea
              className="input"
              placeholder="Write all you want!"
              label="Description:"
              labelPlacement="floating"
              rows={20}
              fill="outline"
            ></IonTextarea>

            <IonList className="form-actions" lines="none">
              <IonItem>
                <IonIcon icon={image}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={mic}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={text}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={happy}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={attach}></IonIcon>
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

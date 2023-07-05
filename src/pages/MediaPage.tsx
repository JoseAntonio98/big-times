import { IonContent, IonImg, IonPage, IonText } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import "./MediaPage.css";
import Programming from "../assets/programming.svg";

const MediaPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Media" />
        <div className="center-container">
          <IonImg src={Programming}></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MediaPage;

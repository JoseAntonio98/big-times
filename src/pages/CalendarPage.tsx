import { IonContent, IonImg, IonPage, IonText } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import "./Calendar.css";
import Programming from "../assets/programming.svg";

const CalendarPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Calendar" />
        <div className="center-container">
          <IonImg src={Programming}></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;

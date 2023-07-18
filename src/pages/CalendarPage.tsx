import { IonContent, IonImg, IonPage, IonText } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import "./Calendar.css";

const CalendarPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Calendar" />
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;

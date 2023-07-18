import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import CalendarEmpty from "../components/CalendarEmpty";

const CalendarPage: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Calendar" />
        <Calendar onChange={onChange} value={value} />
        <CalendarEmpty />
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;

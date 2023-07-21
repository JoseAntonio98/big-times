import { useState } from "react";
import { IonContent, IonDatetime, IonPage } from "@ionic/react";

// import Calendar from "react-calendar";

import CalendarEmpty from "../components/CalendarEmpty";
import HeaderScreen from "../components/HeaderScreen";
import Entry from "../components/Entry";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import { entries } from "../data/fake-data";

const CalendarPage: React.FC = () => {
  // const [value, onChange] = useState(new Date());

  // TODO: Agregar modal para ver detalle del Entry

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title="Calendar" />

        <IonDatetime presentation="date"></IonDatetime>

        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry) => (
              <Entry key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <CalendarEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;

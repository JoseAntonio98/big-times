import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

import Calendar from "react-calendar";

import CalendarEmpty from "../components/CalendarEmpty";
import EntriesHeader from "../components/EntriesHeader";
import Entry from "../components/Entry";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import { entries } from "../data/fake-data";

const CalendarPage: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Calendar" />
        <Calendar onChange={onChange} value={value} />
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

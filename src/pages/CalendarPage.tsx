import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import CalendarEmpty from "../components/CalendarEmpty";
import Entry from "../components/Entry";
import { EntryInterface } from "../interfaces/entry";

const CalendarPage: React.FC = () => {
  const [value, onChange] = useState(new Date());

  const entries: Array<EntryInterface> = [
    {
      id: 1,
      title: "Happy Birthday",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      date: "03 July 2023 | 10:20 AM",
      mood: "happy",
    },
    {
      id: 2,
      title: "Angry Birthday",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      date: "04 July 2023 | 10:40 AM",
      mood: "angry",
    },
    {
      id: 3,
      title: "Sad Birthday",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      date: "04 July 2023 | 10:40 AM",
      mood: "sad",
    },
    {
      id: 4,
      title: "Nothing Special",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      date: "04 July 2023 | 10:40 AM",
    },
  ];

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

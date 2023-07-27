import { useState } from "react";
import { IonContent, IonDatetime, IonPage } from "@ionic/react";

// import Calendar from "react-calendar";

import CalendarEmpty from "../components/CalendarEmpty";
import HeaderScreen from "../components/HeaderScreen";
import Entry from "../components/Entry";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import { entries } from "../data/fake-data";
import EntryModal from "../components/EntryModal";

const CalendarPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title="Calendar" />

        <IonDatetime presentation="date"></IonDatetime>

        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry) => (
              <Entry
                key={entry.id}
                entry={entry}
                onClick={() => handleItemClick(entry)}
              />
            ))}
            {selectedItem && (
              <EntryModal
                isOpen={!!selectedItem}
                onClose={handleCloseModal}
                entry={selectedItem}
              />
            )}
          </div>
        ) : (
          <CalendarEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;

import React, { useState } from "react";
import { IonContent, IonPage, IonSearchbar } from "@ionic/react";

import { auth } from "../FirebaseConfig";

import EntryModal from "../components/EntryModal";
import DayMessage from "../components/DayMessage";
import DiaryEmpty from "../components/DiaryEmpty";
import EntryCard from "../components/EntryCard";
import HeaderScreen from "../components/HeaderScreen";
import { entries } from "../data/fake-data";

const DiaryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const user = auth.currentUser;

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={`Diary `} />
        <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>

        <DayMessage />
        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry) => (
              <EntryCard
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
          <DiaryEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DiaryPage;

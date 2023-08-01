import { useState, useEffect } from "react";
import { IonLoading, IonContent, IonDatetime, IonPage } from "@ionic/react";

// import Calendar from "react-calendar";

import CalendarEmpty from "../components/CalendarEmpty";
import HeaderScreen from "../components/HeaderScreen";
import EntryCard from "../components/EntryCard";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import { entries } from "../data/fake-data";
import EntryModal from "../components/EntryModal";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";
import { get_notes } from "../Utilities/user_firestore";
import { useTranslation } from "react-i18next";

const CalendarPage: React.FC = () => {
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [entries, setEntries] = useState([{}]);
  const user = auth.currentUser;

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const getEntries = async () => {
    const data = await get_notes(user!.uid);
    setEntries(
      data.docs.map((doc) => ({
        ...doc.data(),
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    getEntries();
  }, []);

  if (loading) {
    return (
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={"Get notes..."}
      />
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={t("CALENDAR")} />

        <IonDatetime presentation="date"></IonDatetime>

        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry, index: number) => (
              <EntryCard
                key={index}
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

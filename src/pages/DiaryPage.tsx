import React, { useEffect, useState } from "react";
import {
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonLoading,
  IonContent,
  IonPage,
  IonSearchbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import { auth, db } from "../FirebaseConfig";
import EntryModal from "../components/EntryModal";
import DayMessage from "../components/DayMessage";
import DiaryEmpty from "../components/DiaryEmpty";
import EntryCard from "../components/EntryCard";
import HeaderScreen from "../components/HeaderScreen";
import { get_notes } from "../Utilities/user_firestore";
import { useTranslation } from "react-i18next";

const DiaryPage: React.FC = () => {
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState(true);
  const [entries, setEntries] = useState([{}]);
  const user = auth.currentUser;

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUpdateEntries = (event: CustomEvent<RefresherEventDetail>) => {
    getEntries();
    setTimeout(() => {
      event.detail.complete();
    }, 1000);
  };

  const getEntries = async () => {
    const data = await get_notes(user!.uid);
    setEntries(
      data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
    setLoading(false);
  };

  useIonViewDidEnter(() => {
    setIsVisible(true);
  });

  useIonViewDidLeave(() => {
    setIsVisible(false);
  });

  if (isVisible) {
    getEntries();
  }

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
        <HeaderScreen title={t("DIARY")} />
        <IonSearchbar
          animated={true}
          placeholder={t("searchBar")}
        ></IonSearchbar>

        <IonRefresher slot="fixed" onIonRefresh={handleUpdateEntries}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <DayMessage title={t("lastIaMessage")} />
        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry, index: number) => (
              <EntryCard
                key={index}
                entry={entry}
                onClick={() => handleItemClick(entry)}
              />
            ))}
          </div>
        ) : (
          <DiaryEmpty />
        )}
        {selectedItem && (
          <EntryModal
            isOpen={!!selectedItem}
            onClose={handleCloseModal}
            entry={selectedItem}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DiaryPage;

import React, { useEffect, useState } from "react";
import { IonRefresher, IonRefresherContent, RefresherEventDetail, IonLoading, IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { auth, db } from "../FirebaseConfig";
import EntryModal from "../components/EntryModal";
import DayMessage from "../components/DayMessage";
import DiaryEmpty from "../components/DiaryEmpty";
import EntryCard from "../components/EntryCard";
import HeaderScreen from "../components/HeaderScreen";
import { useHistory } from "react-router";
import { entries } from "../data/fake-data";
import { collection, getDocs, query, where } from "firebase/firestore";
import { get_notes } from "../Utilities/user_firestore";

const DiaryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [entries, setEntries] = useState([{}])
  const user = auth.currentUser;

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUpdateEntries = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      getEntries()
      event.detail.complete();
    }, 2000);
  }

  const getEntries = async () => {
    const data = await get_notes(user!.uid)
    setEntries(data.docs.map( (doc) => ({
      ...doc.data()
    })))
    setLoading(false)
  }

  useEffect(() => {    
    getEntries()
  }, [])

  if (loading) {
    return <IonLoading
      isOpen={loading}
      onDidDismiss={() => setLoading(false)}
      message={'Get notes...'}
    />
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={`Diary `} />
        <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>

        <IonRefresher slot="fixed" onIonRefresh={handleUpdateEntries}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <DayMessage />
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

import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";
import Entries from "../components/Entries";

import { auth } from "../FirebaseConfig";
import DiaryEmpty from "../components/DiaryEmpty";
import DayMessage from "../components/DayMessage";
import Entry from "../components/Entry";

import "./styles/DiaryPage.css";
import { entries } from "../data/fake-data";

const DiaryPage: React.FC = () => {
  const personal = [1, 2];
  const community = [1];

  const user = auth.currentUser;

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={`Diary `} />
        <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
        <DayMessage />
        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry) => (
              <Entry key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <DiaryEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DiaryPage;

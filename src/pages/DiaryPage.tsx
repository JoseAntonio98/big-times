import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";
import Entries from "../components/Entries";

import { auth } from "../FirebaseConfig";
import EntriesEmpty from "../components/EntriesEmpty";
import DayMessage from "../components/DayMessage";

import "./styles/DiaryPage.css";

const DiaryPage: React.FC = () => {
  const personal = [1, 2];
  const community = [1];

  const user = auth.currentUser;

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title={`Diary `} />
        <DayMessage />
        <EntriesEmpty />
        {/* <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
          <Entries title="Personal" entries={personal} />
          <Entries title="Community" entries={community} /> */}
      </IonContent>
    </IonPage>
  );
};

export default DiaryPage;

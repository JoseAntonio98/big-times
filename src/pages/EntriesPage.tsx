import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";
import Entries from "../components/Entries";

const EntriesPage: React.FC = () => {
  const personal = [1, 2];
  const community = [1];

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader title="Welcome Eve" />
          <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
          <Entries title="Personal" entries={personal} />
          <Entries title="Community" entries={community} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EntriesPage;

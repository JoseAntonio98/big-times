import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";
import Entries from "../components/Entries";

import { auth } from "../firebaseConfig";

const EntriesPage: React.FC = () => {
  const personal = [1, 2];
  const community = [1];
  
  const user = auth.currentUser;

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader title={`Welcome ${user?.displayName}`} />
          <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
          <Entries title="Personal" entries={personal} />
          <Entries title="Community" entries={community} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EntriesPage;

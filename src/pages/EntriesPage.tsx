import {
  IonContent,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";
import Entries from "../components/Entries";

const EntriesPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader username="Eve" />
          <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
          <Entries title="Personal"/>
          <Entries title="Community"/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EntriesPage;

import { IonContent, IonPage } from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

import "./SettingsPage.css";

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <EntriesHeader title="Settings" />
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;

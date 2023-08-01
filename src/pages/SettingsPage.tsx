import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonPage, IonToggle } from "@ionic/react";
import { cloudOutline, colorPaletteOutline, keyOutline, language, logOutOutline, notificationsOutline, trashBinOutline } from "ionicons/icons";
import HeaderScreen from "../components/HeaderScreen";
import { logout } from "../Utilities/user_firestore";
import "./styles/SettingsPage.css";

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title="Settings" />
        <div className="custom-sp-container">
          <h1 className="custom-sp-title">Personal</h1>
          <div>
            <IonItem>
              <IonIcon icon={language} slot="start"></IonIcon>
              <IonToggle>Change to Spanish</IonToggle>
            </IonItem>
            <IonItem detail={true}>
              <IonIcon icon={keyOutline} slot="start"></IonIcon>
              <IonLabel>Password (PIN)</IonLabel>
            </IonItem>
            <IonItem detail={true} disabled={true}>
              <IonIcon icon={colorPaletteOutline} slot="start"></IonIcon>
              <IonLabel>Themes</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={notificationsOutline} slot="start"></IonIcon>
              <IonToggle>Daily reminder</IonToggle>
            </IonItem>
          </div>
        </div>

        <div className="custom-sp-container">
          <h1 className="custom-sp-title">My Data</h1>
          <div>
            <IonItem detail={true} disabled={true}>
              <IonIcon icon={cloudOutline} slot="start"></IonIcon>
              <IonLabel>Backup & Restore</IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonIcon icon={trashBinOutline} slot="start"></IonIcon>
              <IonLabel>Delete app data</IonLabel>
            </IonItem>
          </div>
        </div>

        <div className="custom-sp-container">
          <h1 className="custom-sp-title">Session</h1>
          <div>
            <IonItem onClick={logout} detail={true}>
              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;

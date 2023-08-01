import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonToggle,
} from "@ionic/react";
import {
  cloudOutline,
  colorPaletteOutline,
  keyOutline,
  language,
  logOutOutline,
  notificationsOutline,
  trashBinOutline,
} from "ionicons/icons";
import HeaderScreen from "../components/HeaderScreen";
import { logout } from "../Utilities/user_firestore";

import { useTranslation } from "react-i18next";

import "./styles/SettingsPage.css";

const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={t("SETTINGS")} />
        <div className="custom-sp-container">
          <h1 className="custom-sp-title">{t("personalTitle")}</h1>
          <div>
            <IonItem>
              <IonIcon icon={language} slot="start"></IonIcon>
              <IonToggle
                checked={i18n.language === "es"}
                onIonChange={handleChangeLanguage}
              >
                {t("languageToggle")}
              </IonToggle>
            </IonItem>
            <IonItem detail={true} disabled={true}>
              <IonIcon icon={keyOutline} slot="start"></IonIcon>
              <IonLabel>{t("passwordOption")}</IonLabel>
            </IonItem>
            <IonItem detail={true} disabled={true}>
              <IonIcon icon={colorPaletteOutline} slot="start"></IonIcon>
              <IonLabel>{t("themesOption")}</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={notificationsOutline} slot="start"></IonIcon>
              <IonToggle>{t("reminderOption")}</IonToggle>
            </IonItem>
          </div>
        </div>

        <div className="custom-sp-container">
          <h1 className="custom-sp-title">{t("dataTitle")}</h1>
          <div>
            <IonItem detail={true} disabled={true}>
              <IonIcon icon={cloudOutline} slot="start"></IonIcon>
              <IonLabel>{t("backupOption")}</IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonIcon icon={trashBinOutline} slot="start"></IonIcon>
              <IonLabel>{t("deleteDataOption")}</IonLabel>
            </IonItem>
          </div>
        </div>

        <div className="custom-sp-container">
          <h1 className="custom-sp-title">{t("sessionTitle")}</h1>
          <div>
            <IonItem onClick={logout} detail={true}>
              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              <IonLabel>{t("logoutOption")}</IonLabel>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;

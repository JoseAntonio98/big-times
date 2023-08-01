import { IonContent, IonIcon, IonItem, IonLabel, IonPage } from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";

import "./styles/InsightsPage.css";
import { checkmarkCircle, flame } from "ionicons/icons";
import { useTranslation } from "react-i18next";

const InsightsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={t("INSIGTS")} />

        <div className="custom-ip-container">
          <div>
            <h1 className="custom-sp-title">{t("entryStatsTitle")}</h1>
            <div className="custom-ip-entries-stats custom-ip-box-shadow">
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>{t("statsEntries")}</h2>
              </div>
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>{t("statsMoods")}</h2>
              </div>
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>{t("statsStreak")}</h2>
              </div>
              <div className="custom-ip-streak">
                <IonItem>
                  <IonIcon
                    icon={flame}
                    color="warning"
                    style={{ marginRight: ".35rem" }}
                  ></IonIcon>
                  <IonLabel>{t("streakTitle")} 7</IonLabel>
                </IonItem>
              </div>
            </div>
          </div>

          <div>
            <h1 className="custom-sp-title">{t("moodStatsTitle")}</h1>
            <div className="custom-ip-mood-stats custom-ip-box-shadow">
              <div>
                <div className="custom-ip-mood-chart"></div>
                {/*  Quitar div, y colocar un chart */}
              </div>
              <div>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="success"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsHappy")}</p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="danger"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsAngry")} </p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="tertiary"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsSad")} </p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="medium"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsNone")} </p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InsightsPage;

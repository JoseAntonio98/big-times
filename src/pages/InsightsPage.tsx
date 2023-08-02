import { IonContent, IonIcon, IonItem, IonLabel, IonPage } from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";

import "./styles/InsightsPage.css";
import { checkmarkCircle, flame } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import { auth } from "../FirebaseConfig";
import { get_notes } from "../Utilities/user_firestore";
import { useEffect, useState } from "react";

const InsightsPage: React.FC = () => {
  const { t } = useTranslation();

  const user = auth.currentUser;
  const [entries, setEntries] = useState([{}]);
  const [moodsCounter, setMoodsCounter] = useState(0);
  const [happyCounter, setHappyCounter] = useState(0);
  const [sadCounter, setSadCounter] = useState(0);
  const [angryCounter, setAngryCounter] = useState(0);
  const [noMoodCounter, setNoMoodCounter] = useState(0);

  const getEntries = async () => {
    const data = await get_notes(user!.uid);

    setEntries(
      data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  const getMoodsCounter = () => {
    setMoodsCounter(entries.filter((entry: any) => entry.mood !== "").length);

    setHappyCounter(entries.filter((entry: any) => entry.mood === "happy").length);
    setSadCounter(entries.filter((entry: any) => entry.mood === "sad").length);
    setAngryCounter(entries.filter((entry: any) => entry.mood === "angry").length);
    setNoMoodCounter(entries.filter((entry: any) => entry.mood === "").length);
  }

  useEffect(() => {
    getEntries();
    getMoodsCounter();
  }, [entries]);

  const getPercentage = (count: number) => (count * 100 / entries.length).toFixed(1);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={t("INSIGTS")} />

        <div className="custom-ip-container">
          <div>
            <h1 className="custom-sp-title">{t("entryStatsTitle")}</h1>
            <div className="custom-ip-entries-stats custom-ip-box-shadow">
              <div className="custom-ip-entry">
                <h1>{entries.length}</h1>
                <h2>{t("statsEntries")}</h2>
              </div>
              <div className="custom-ip-entry">
                <h1>{moodsCounter}</h1>
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
                  <IonLabel>{t("streakTitle")} 1</IonLabel>
                </IonItem>
              </div>
            </div>
          </div>

          <div>
            <h1 className="custom-sp-title">{t("moodStatsTitle")}</h1>
            <div className="custom-ip-mood-stats custom-ip-box-shadow">
              {/* <div>
                <div className="custom-ip-mood-chart"></div>
              </div> */}
              <div>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="success"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsHappy")} ({happyCounter})</p>
                      <p>{getPercentage(happyCounter)}%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="danger"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsAngry")} ({angryCounter})</p>
                      <p>{getPercentage(angryCounter)}%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="tertiary"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsSad")} ({sadCounter})</p>
                      <p>{getPercentage(sadCounter)}%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem className="item">
                  <IonIcon icon={checkmarkCircle} color="medium"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p className="item_label">{t("moodStatsNone")} ({noMoodCounter})</p>
                      <p>{getPercentage(noMoodCounter)}%</p>
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

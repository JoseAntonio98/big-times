import { IonContent, IonIcon, IonItem, IonLabel, IonPage } from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";

import "./styles/InsightsPage.css";
import { checkmarkCircle, flame } from "ionicons/icons";

const InsightsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title="Insights" />

        <div className="custom-ip-container">
          <div>
            <h1 className="custom-sp-title">Entries Stats</h1>
            <div className="custom-ip-entries-stats custom-ip-box-shadow">
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>Entries</h2>
              </div>
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>Moods</h2>
              </div>
              <div className="custom-ip-entry">
                <h1>1</h1>
                <h2>Streak</h2>
              </div>
              <div className="custom-ip-streak">
                <IonItem>
                  <IonIcon
                    icon={flame}
                    color="warning"
                    style={{ marginRight: ".35rem" }}
                  ></IonIcon>
                  <IonLabel>Longest streak: 7</IonLabel>
                </IonItem>
              </div>
            </div>
          </div>

          <div>
            <h1 className="custom-sp-title">Mood Stats</h1>
            <div className="custom-ip-mood-stats custom-ip-box-shadow">
              <div>
                <div className="custom-ip-mood-chart"></div>
                {/*  Quitar div, y colocar un chart */}
              </div>
              <div>
                <IonItem>
                  <IonIcon icon={checkmarkCircle} color="success"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p>Happy: </p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={checkmarkCircle} color="danger"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p>Angry: </p>
                      <p>100%</p>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={checkmarkCircle} color="tertiary"></IonIcon>
                  <IonLabel>
                    <div className="custom-ip-mood-item">
                      <p>Sad: </p>
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

import { IonContent, IonPage } from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";

const InsightsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <HeaderScreen title="Insights" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InsightsPage;

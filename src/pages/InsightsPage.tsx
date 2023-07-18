import {
  IonContent,
  IonPage
} from "@ionic/react";
import EntriesHeader from "../components/EntriesHeader";

const InsightsPage: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader title="Insights" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InsightsPage;

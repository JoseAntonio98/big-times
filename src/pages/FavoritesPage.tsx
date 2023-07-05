import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Entries from "../components/Entries";
import EntriesHeader from "../components/EntriesHeader";

const FavoritesPage: React.FC = () => {
  const favorites = [1, 2, 3, 4];

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div>
          <EntriesHeader title="Eve's favorites" />
          <Entries entries={favorites} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;

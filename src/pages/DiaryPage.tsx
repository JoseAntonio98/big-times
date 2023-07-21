import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import HeaderScreen from "../components/HeaderScreen";
import Entries from "../components/Entries";

import { auth } from "../FirebaseConfig";
import DiaryEmpty from "../components/DiaryEmpty";
import DayMessage from "../components/DayMessage";
import Entry from "../components/Entry";

import "./styles/DiaryPage.css";
import { entries } from "../data/fake-data";
import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { chevronBackOutline, pencil, trashBinOutline } from "ionicons/icons";

// TODO: Get Entry ID
const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, "cancel")}>
              <IonIcon icon={chevronBackOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => onDismiss(inputRef.current?.value, "confirm")}
              strong={true}
            >
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* TODO: Improve styles */}
        <IonList>
          <IonIcon icon={trashBinOutline} color="danger" size="large"></IonIcon>
          <IonIcon icon={pencil} size="large"></IonIcon>
        </IonList>

        <IonDatetime presentation="date-time" />

        <IonItem>
          <IonText>Entry Title</IonText>
        </IonItem>

        <IonItem>
          <IonText>Entry Description</IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

const DiaryPage: React.FC = () => {
  const personal = [1, 2];
  const community = [1];

  const user = auth.currentUser;

  /* MODAL */
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState(
    "This modal example uses the modalController to present and dismiss modals."
  );

  function openModal(idEntry: number) {
    console.log(idEntry);
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          setMessage(`Hello, ${ev.detail.data}!`);
        }
      },
    });
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <HeaderScreen title={`Diary `} />
        <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>

        <DayMessage />
        {entries ? (
          <div style={{ marginTop: "2rem" }}>
            {entries.map((entry) => (
              <Entry
                key={entry.id}
                entry={entry}
                onClick={() => openModal(entry.id)}
              />
            ))}
          </div>
        ) : (
          <DiaryEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DiaryPage;

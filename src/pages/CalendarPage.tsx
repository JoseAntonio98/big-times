import { useRef, useState } from "react";
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
  IonText,
  IonToolbar,
  useIonModal,
} from "@ionic/react";

// import Calendar from "react-calendar";

import CalendarEmpty from "../components/CalendarEmpty";
import HeaderScreen from "../components/HeaderScreen";
import Entry from "../components/Entry";

import "react-calendar/dist/Calendar.css";
import "./styles/CalendarPage.css";
import { entries } from "../data/fake-data";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { chevronBackOutline, trashBinOutline, pencil } from "ionicons/icons";

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

const CalendarPage: React.FC = () => {
  // const [value, onChange] = useState(new Date());

  // TODO: Agregar modal para ver detalle del Entry
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
        <HeaderScreen title="Calendar" />

        <IonDatetime presentation="date"></IonDatetime>

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
          <CalendarEmpty />
        )}
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;
